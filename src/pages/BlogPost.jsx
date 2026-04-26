import { Link, useParams } from "react-router-dom";
import { ArrowIcon } from "../components/Icons.jsx";
import { POSTS, formatDate } from "./blogData.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="relative py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
            404 · post not found
          </div>
          <h1 className="mt-4 font-display text-[32px] font-semibold leading-tight text-text sm:text-[42px]">
            That post is off the wire.
          </h1>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-[13px] text-accent hover:underline">
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Back to field notes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="relative pb-28 pt-16 sm:pt-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          to="/blog"
          id="link-blog-back"
          data-event="blog_post_back_click"
          className="inline-flex items-center gap-2 text-[12px] font-medium text-mute transition-colors hover:text-text"
        >
          <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
          Field notes
        </Link>

        <div className="mt-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            {post.kicker} · {formatDate(post.date)} · {post.readTime}
          </div>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.02em] text-text sm:text-[48px]">
            {post.title}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-mute">{post.excerpt}</p>
        </div>

        <div className="mt-10 h-px hair" />

        <div className="prose prose-invert mt-10 max-w-none text-[15.5px] leading-[1.75] text-text/90">
          <p>
            This is a placeholder post body. Replace this content with the full article when it is ready for publication. The layout is already tuned for long-form reading: a measured 62-character line length, careful vertical rhythm, and typographic scale that favors focus over density.
          </p>

          <h2 className="mt-10 font-display text-[22px] font-semibold tracking-tight text-text">
            A short section heading
          </h2>
          <p>
            Keep paragraphs short. Load the page with the single idea that matters most, then earn each additional sentence. Readers decide within the first line whether to stay; the rest of the post is a reward for that trust.
          </p>

          <blockquote className="my-8 border-l-2 border-accent pl-5 font-display text-[20px] italic leading-snug text-text">
            &ldquo;The best news product in the world is the one you actually finish.&rdquo;
          </blockquote>

          <p>
            Swap this copy out when you have the real draft ready. Embed clips, captions, and pull-quotes inline; the page already supports them through standard HTML inside this container.
          </p>
        </div>

        {/* Footer row */}
        <div className="mt-16 flex items-center justify-between border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span>End of dispatch</span>
          <Link
            to="/blog"
            id="link-blog-next"
            data-event="blog_post_next_click"
            className="inline-flex items-center gap-2 text-accent"
          >
            More field notes <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
