<script>
    import NavBar from './NavBar.svelte';
    let { children } = $props();
</script>

<style>
:global(body) {
    cursor: default;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    min-width: 320px; 
    min-height: 100vh; 
    font-size: 16px;
    font-kerning: auto;
}
:global(header) {
    font-size: 20px;
}
#root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
#body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0;
    margin: 0 auto;
}
</style>

<div id="root">
    <NavBar/>
    <div id="body">
        {@render children()}
    </div>
    <footer>
        patented trademarked copyrighted copylefted copyup-down-allaround
    </footer>
</div>

