# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-cloudflare.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudflareProvider <a name="CloudflareProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs cloudflare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_base_path: str = None,
  api_client_logging: typing.Union[bool, IResolvable] = None,
  api_hostname: str = None,
  api_key: str = None,
  api_token: str = None,
  api_user_service_key: str = None,
  email: str = None,
  max_backoff: typing.Union[int, float] = None,
  min_backoff: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  rps: typing.Union[int, float] = None,
  user_agent_operator_suffix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiBasePath">api_base_path</a></code> | <code>str</code> | Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiClientLogging">api_client_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to print logs from the API client (using the default log library logger). |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiHostname">api_hostname</a></code> | <code>str</code> | Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | The API key for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | The API Token for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiUserServiceKey">api_user_service_key</a></code> | <code>str</code> | A special Cloudflare API key good for a restricted set of endpoints. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.email">email</a></code> | <code>str</code> | A registered Cloudflare email address. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.maxBackoff">max_backoff</a></code> | <code>typing.Union[int, float]</code> | Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.minBackoff">min_backoff</a></code> | <code>typing.Union[int, float]</code> | Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries to perform when an API request fails. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.rps">rps</a></code> | <code>typing.Union[int, float]</code> | RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.userAgentOperatorSuffix">user_agent_operator_suffix</a></code> | <code>str</code> | A value to append to the HTTP User Agent for all API calls. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#alias CloudflareProvider#alias}

---

##### `api_base_path`<sup>Optional</sup> <a name="api_base_path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiBasePath"></a>

- *Type:* str

Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_base_path CloudflareProvider#api_base_path}

---

##### `api_client_logging`<sup>Optional</sup> <a name="api_client_logging" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiClientLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print logs from the API client (using the default log library logger).

Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_client_logging CloudflareProvider#api_client_logging}

---

##### `api_hostname`<sup>Optional</sup> <a name="api_hostname" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiHostname"></a>

- *Type:* str

Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_hostname CloudflareProvider#api_hostname}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiKey"></a>

- *Type:* str

The API key for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_key CloudflareProvider#api_key}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiToken"></a>

- *Type:* str

The API Token for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_token CloudflareProvider#api_token}

---

##### `api_user_service_key`<sup>Optional</sup> <a name="api_user_service_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.apiUserServiceKey"></a>

- *Type:* str

A special Cloudflare API key good for a restricted set of endpoints.

Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.email"></a>

- *Type:* str

A registered Cloudflare email address.

Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#email CloudflareProvider#email}

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.maxBackoff"></a>

- *Type:* typing.Union[int, float]

Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#max_backoff CloudflareProvider#max_backoff}

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.minBackoff"></a>

- *Type:* typing.Union[int, float]

Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#min_backoff CloudflareProvider#min_backoff}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries to perform when an API request fails.

Alternatively, can be configured using the `CLOUDFLARE_RETRIES` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#retries CloudflareProvider#retries}

---

##### `rps`<sup>Optional</sup> <a name="rps" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.rps"></a>

- *Type:* typing.Union[int, float]

RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#rps CloudflareProvider#rps}

---

##### `user_agent_operator_suffix`<sup>Optional</sup> <a name="user_agent_operator_suffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.userAgentOperatorSuffix"></a>

- *Type:* str

A value to append to the HTTP User Agent for all API calls.

This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiBasePath">reset_api_base_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiClientLogging">reset_api_client_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiHostname">reset_api_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey">reset_api_user_service_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMaxBackoff">reset_max_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMinBackoff">reset_min_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRps">reset_rps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix">reset_user_agent_operator_suffix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_base_path` <a name="reset_api_base_path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiBasePath"></a>

```python
def reset_api_base_path() -> None
```

##### `reset_api_client_logging` <a name="reset_api_client_logging" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiClientLogging"></a>

```python
def reset_api_client_logging() -> None
```

##### `reset_api_hostname` <a name="reset_api_hostname" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiHostname"></a>

```python
def reset_api_hostname() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_api_token` <a name="reset_api_token" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_api_user_service_key` <a name="reset_api_user_service_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey"></a>

```python
def reset_api_user_service_key() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_max_backoff` <a name="reset_max_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMaxBackoff"></a>

```python
def reset_max_backoff() -> None
```

##### `reset_min_backoff` <a name="reset_min_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetMinBackoff"></a>

```python
def reset_min_backoff() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_rps` <a name="reset_rps" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetRps"></a>

```python
def reset_rps() -> None
```

##### `reset_user_agent_operator_suffix` <a name="reset_user_agent_operator_suffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix"></a>

```python
def reset_user_agent_operator_suffix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudflareProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudflareProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudflareProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePathInput">api_base_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLoggingInput">api_client_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostnameInput">api_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput">api_user_service_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoffInput">max_backoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoffInput">min_backoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rpsInput">rps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput">user_agent_operator_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePath">api_base_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLogging">api_client_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostname">api_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey">api_user_service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoff">max_backoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoff">min_backoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rps">rps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix">user_agent_operator_suffix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_base_path_input`<sup>Optional</sup> <a name="api_base_path_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePathInput"></a>

```python
api_base_path_input: str
```

- *Type:* str

---

##### `api_client_logging_input`<sup>Optional</sup> <a name="api_client_logging_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLoggingInput"></a>

```python
api_client_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_hostname_input`<sup>Optional</sup> <a name="api_hostname_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostnameInput"></a>

```python
api_hostname_input: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `api_user_service_key_input`<sup>Optional</sup> <a name="api_user_service_key_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput"></a>

```python
api_user_service_key_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `max_backoff_input`<sup>Optional</sup> <a name="max_backoff_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoffInput"></a>

```python
max_backoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_backoff_input`<sup>Optional</sup> <a name="min_backoff_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoffInput"></a>

```python
min_backoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rps_input`<sup>Optional</sup> <a name="rps_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rpsInput"></a>

```python
rps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_agent_operator_suffix_input`<sup>Optional</sup> <a name="user_agent_operator_suffix_input" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput"></a>

```python
user_agent_operator_suffix_input: str
```

- *Type:* str

---

##### `api_base_path`<sup>Optional</sup> <a name="api_base_path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiBasePath"></a>

```python
api_base_path: str
```

- *Type:* str

---

##### `api_client_logging`<sup>Optional</sup> <a name="api_client_logging" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiClientLogging"></a>

```python
api_client_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_hostname`<sup>Optional</sup> <a name="api_hostname" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `api_user_service_key`<sup>Optional</sup> <a name="api_user_service_key" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey"></a>

```python
api_user_service_key: str
```

- *Type:* str

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.maxBackoff"></a>

```python
max_backoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.minBackoff"></a>

```python
min_backoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rps`<sup>Optional</sup> <a name="rps" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.rps"></a>

```python
rps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_agent_operator_suffix`<sup>Optional</sup> <a name="user_agent_operator_suffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix"></a>

```python
user_agent_operator_suffix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudflareProviderConfig <a name="CloudflareProviderConfig" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import provider

provider.CloudflareProviderConfig(
  alias: str = None,
  api_base_path: str = None,
  api_client_logging: typing.Union[bool, IResolvable] = None,
  api_hostname: str = None,
  api_key: str = None,
  api_token: str = None,
  api_user_service_key: str = None,
  email: str = None,
  max_backoff: typing.Union[int, float] = None,
  min_backoff: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  rps: typing.Union[int, float] = None,
  user_agent_operator_suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiBasePath">api_base_path</a></code> | <code>str</code> | Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiClientLogging">api_client_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to print logs from the API client (using the default log library logger). |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiHostname">api_hostname</a></code> | <code>str</code> | Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey">api_key</a></code> | <code>str</code> | The API key for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken">api_token</a></code> | <code>str</code> | The API Token for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey">api_user_service_key</a></code> | <code>str</code> | A special Cloudflare API key good for a restricted set of endpoints. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email">email</a></code> | <code>str</code> | A registered Cloudflare email address. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.maxBackoff">max_backoff</a></code> | <code>typing.Union[int, float]</code> | Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.minBackoff">min_backoff</a></code> | <code>typing.Union[int, float]</code> | Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries to perform when an API request fails. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.rps">rps</a></code> | <code>typing.Union[int, float]</code> | RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix">user_agent_operator_suffix</a></code> | <code>str</code> | A value to append to the HTTP User Agent for all API calls. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#alias CloudflareProvider#alias}

---

##### `api_base_path`<sup>Optional</sup> <a name="api_base_path" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiBasePath"></a>

```python
api_base_path: str
```

- *Type:* str

Configure the base path used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_BASE_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_base_path CloudflareProvider#api_base_path}

---

##### `api_client_logging`<sup>Optional</sup> <a name="api_client_logging" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiClientLogging"></a>

```python
api_client_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print logs from the API client (using the default log library logger).

Alternatively, can be configured using the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_client_logging CloudflareProvider#api_client_logging}

---

##### `api_hostname`<sup>Optional</sup> <a name="api_hostname" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

Configure the hostname used by the API client. Alternatively, can be configured using the `CLOUDFLARE_API_HOSTNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_hostname CloudflareProvider#api_hostname}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The API key for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_key CloudflareProvider#api_key}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

The API Token for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_token CloudflareProvider#api_token}

---

##### `api_user_service_key`<sup>Optional</sup> <a name="api_user_service_key" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey"></a>

```python
api_user_service_key: str
```

- *Type:* str

A special Cloudflare API key good for a restricted set of endpoints.

Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email"></a>

```python
email: str
```

- *Type:* str

A registered Cloudflare email address.

Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#email CloudflareProvider#email}

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.maxBackoff"></a>

```python
max_backoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MAX_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#max_backoff CloudflareProvider#max_backoff}

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.minBackoff"></a>

```python
min_backoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `CLOUDFLARE_MIN_BACKOFF` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#min_backoff CloudflareProvider#min_backoff}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries to perform when an API request fails.

Alternatively, can be configured using the `CLOUDFLARE_RETRIES` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#retries CloudflareProvider#retries}

---

##### `rps`<sup>Optional</sup> <a name="rps" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.rps"></a>

```python
rps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RPS limit to apply when making calls to the API. Alternatively, can be configured using the `CLOUDFLARE_RPS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#rps CloudflareProvider#rps}

---

##### `user_agent_operator_suffix`<sup>Optional</sup> <a name="user_agent_operator_suffix" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix"></a>

```python
user_agent_operator_suffix: str
```

- *Type:* str

A value to append to the HTTP User Agent for all API calls.

This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}

---



