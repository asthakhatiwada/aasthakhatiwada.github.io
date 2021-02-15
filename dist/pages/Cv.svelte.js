/* src/pages/Cv.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let p;
	let t1;
	let embed;
	let embed_src_value;

	return {
		c() {
			p = element("p");
			p.innerHTML = `<a class="external-link" href="/public/misc/Khatiwada_CV.pdf" download="">Download CV</a>`;
			t1 = space();
			embed = element("embed");
			attr(p, "class", "mb-4");
			if (embed.src !== (embed_src_value = "/public/misc/Khatiwada_CV.pdf")) attr(embed, "src", embed_src_value);
			attr(embed, "type", "application/pdf");
			attr(embed, "width", "100%");
			attr(embed, "height", "800px");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			insert(target, t1, anchor);
			insert(target, embed, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(p);
			if (detaching) detach(t1);
			if (detaching) detach(embed);
		}
	};
}

class Cv extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Cv;