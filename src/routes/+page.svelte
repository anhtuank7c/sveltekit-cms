<script lang="ts">
	import * as Accordition from '$lib/components/ui/accordion';
	import * as Popover from '$lib/components/ui/popover';
	import { notificationStore } from '$stores/notification';

	$: console.log('notificationStore', $notificationStore);
</script>

<Accordition.Root>
	<Accordition.Item value="item-1">
		<Accordition.Trigger>What is SvelteKit CMS?</Accordition.Trigger>
		<Accordition.Content>
			I want to build a CMS in Svelte with SvelteKit. So I just simply name it SvelteKit CMS.
		</Accordition.Content>
	</Accordition.Item>
</Accordition.Root>

<Popover.Root>
	<Popover.Trigger>Open</Popover.Trigger>
	<Popover.Content>Place content for the popover here.</Popover.Content>
</Popover.Root>
