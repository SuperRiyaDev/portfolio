/** Runs before paint to match `localStorage` and avoid a light/dark flash. */
export function ThemeScript() {
  const script = `(function(){try{var k="portfolio-theme",t=localStorage.getItem(k),r=document.documentElement;if(t==="light"||t==="dark"){r.dataset.theme=t;return}if(t==="default"||t==="soft"||!t){r.dataset.theme="dark";localStorage.setItem(k,"dark")}}catch(e){}})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
