import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'string',
};

render(<Form schema={schema} validator={validator} />, document.getElementById('app'));