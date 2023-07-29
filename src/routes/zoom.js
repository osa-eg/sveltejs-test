import { sineIn } from 'svelte/easing'
	
export default function zoom(node, options) {
	const bbox = options.node.getBoundingClientRect()
	
	node.style.position = 'absolute'

	return {
		delay: options.delay || 0,
		duration: options.duration || 400,
		easing: options.easing || sineIn,
		css: (t, u) => {
			if (t == 0) {
				node.style.top = `${bbox.top}px`
				node.style.left = `${bbox.left}px`
				node.style.width = `${bbox.width}px`
				node.style.height = `${bbox.height}px`
				node.classList.remove('expanding')
			} else {
				node.classList.add('expanding')
			}

			if (t == 1) {
				node.style.top = '0px'
				node.style.left = '0px'
				node.style.width = '100vw'
				node.style.height = '100vh'
			}
			
			return `width: ${bbox.width + ((window.innerWidth - bbox.width)*t)}px; height: ${bbox.height + ((window.innerHeight -bbox.height)*t)}px; top: ${bbox.top*u}px; left: ${bbox.left*u}px;`
		}
	}
}