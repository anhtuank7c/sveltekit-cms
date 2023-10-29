<script lang="ts">
	import type { PageData } from './$types';
	import { signUpSchema } from './schema';
	import * as Form from '$lib/components/ui/form';
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={signUpSchema} let:config debug={true}>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="firstName">
		<Form.Item>
			<Form.Label>Firstname</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="lastName">
		<Form.Item>
			<Form.Label>Lastname</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Register</Form.Button>
</Form.Root>
