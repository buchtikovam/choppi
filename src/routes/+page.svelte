<script lang="ts">
    import { databases } from "$lib/appwrite";
    import { invalidateAll } from "$app/navigation";
    import { ID } from "appwrite";
    import type { PageData } from './$types';
    import type { FormEventHandler } from "svelte/elements";

    // let { data }: { data: PageData } = $props();

    // console.log(data)
    //
    // async function add(e: SubmitEvent) {
    //     e.preventDefault();
    //     const formEl = e.target;
    //     const formData = new FormData(formEl);
    //
    //     await databases.createDocument("database", "test", ID.unique(), {
    //         name: formData.get('name'),
    //         message: formData.get('message'),
    //     });
    //
    //     await invalidateAll();
    // }
</script>

<!--<div class="p-4" >-->
<!--    {#each data.test.documents as recipe}-->
<!--        <p>-->
<!--            {recipe.name} | {recipe.message}-->
<!--        </p>-->
<!--    {/each}-->

<!--    <form class="flex flex-col w-40 mt-4" onsubmit={(e) => add(e)}>-->
<!--        <label for="name">Name</label>-->
<!--        <input type="text" name="name" required>-->

<!--        <label for="message">Message</label>-->
<!--        <input type="text" name="message" required>-->

<!--        <button type="submit">Submit</button>-->
<!--    </form>-->
<!--</div>-->
