<script>
    import { onMount } from 'svelte';

    let domainName = "";
    onMount(() => {
        domainName = window.location.hostname;
    });
</script>

<style>
.navbar,
.navbar-menubar-items {
    display: flex;
    flex-direction: row;
}
.navbar-menubar-items,
.navbar-home-link {
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 8px;
    margin-bottom: 16px;
}
.navbar-menu-item {
    margin-left: 8px;
    margin-right: 8px;
}
.navbar-home-link {
    margin-right: auto;
}
</style>

<div class='navbar'>
    <header class='navbar-home-link'>
        <a href='/'>{domainName}</a>
    </header>
    <header class='navbar-menubar-items'>
        <div class='navbar-menu-item'>
            <a href='/about'>About Me</a>
        </div>
        <div class='navbar-menu-item'>
            <a href='/blog'>Blog</a>
        </div>
        <div class='navbar-menu-item'>
            <a href='/contact'>Contact</a>
        </div>
    </header>
</div>
