# `dataCloudflareNotificationPolicyWebhooks` Submodule <a name="`dataCloudflareNotificationPolicyWebhooks` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicyWebhooks <a name="DataCloudflareNotificationPolicyWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks cloudflare_notification_policy_webhooks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  webhook_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.webhookId">webhook_id</a></code> | <code>str</code> | The unique identifier of a webhook. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.accountId"></a>

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks#account_id DataCloudflareNotificationPolicyWebhooks#account_id}

---

##### `webhook_id`<sup>Optional</sup> <a name="webhook_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.Initializer.parameter.webhookId"></a>

- *Type:* str

The unique identifier of a webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks#webhook_id DataCloudflareNotificationPolicyWebhooks#webhook_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.resetWebhookId">reset_webhook_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_webhook_id` <a name="reset_webhook_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.resetWebhookId"></a>

```python
def reset_webhook_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareNotificationPolicyWebhooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lastFailure">last_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lastSuccess">last_success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.webhookIdInput">webhook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.webhookId">webhook_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_failure`<sup>Required</sup> <a name="last_failure" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lastFailure"></a>

```python
last_failure: str
```

- *Type:* str

---

##### `last_success`<sup>Required</sup> <a name="last_success" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.lastSuccess"></a>

```python
last_success: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `webhook_id_input`<sup>Optional</sup> <a name="webhook_id_input" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.webhookIdInput"></a>

```python
webhook_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `webhook_id`<sup>Required</sup> <a name="webhook_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.webhookId"></a>

```python
webhook_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyWebhooksConfig <a name="DataCloudflareNotificationPolicyWebhooksConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policy_webhooks

dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  webhook_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.webhookId">webhook_id</a></code> | <code>str</code> | The unique identifier of a webhook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks#account_id DataCloudflareNotificationPolicyWebhooks#account_id}

---

##### `webhook_id`<sup>Optional</sup> <a name="webhook_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooks.DataCloudflareNotificationPolicyWebhooksConfig.property.webhookId"></a>

```python
webhook_id: str
```

- *Type:* str

The unique identifier of a webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/notification_policy_webhooks#webhook_id DataCloudflareNotificationPolicyWebhooks#webhook_id}

---



