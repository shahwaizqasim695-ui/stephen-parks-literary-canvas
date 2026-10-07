<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep book content and the configurable purchase URL in `src/data/book.ts`; shared sections consume this source to avoid inconsistent book information.
- Compose the single-page website with focused components under `src/components/book` and keep TanStack Start's index route as the entry point; this preserves framework routing and makes the editorial sections reusable.
- Serve cropped official cover artwork through Lovable Assets; this preserves the original visual identity without committing image binaries.
