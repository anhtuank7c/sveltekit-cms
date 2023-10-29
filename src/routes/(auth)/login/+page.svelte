<script lang="ts">
	// import { Form } from 'formsnap';
	import type { PageData } from './$types';
	import { loginSchema } from './schema';
	import * as Form from '$lib/components/ui/form';
	export let data: PageData;
</script>

<Form.Root form={data.form} schema={loginSchema} let:config debug={true}>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
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
	<Form.Button>Login</Form.Button>
</Form.Root>
