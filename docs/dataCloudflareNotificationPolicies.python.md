# `dataCloudflareNotificationPolicies` Submodule <a name="`dataCloudflareNotificationPolicies` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicies <a name="DataCloudflareNotificationPolicies" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies cloudflare_notification_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.accountId"></a>

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies#account_id DataCloudflareNotificationPolicies#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies#max_items DataCloudflareNotificationPolicies#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareNotificationPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareNotificationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result"></a>

```python
result: DataCloudflareNotificationPoliciesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPoliciesConfig <a name="DataCloudflareNotificationPoliciesConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId">account_id</a></code> | <code>str</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies#account_id DataCloudflareNotificationPolicies#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/notification_policies#max_items DataCloudflareNotificationPolicies#max_items}

---

### DataCloudflareNotificationPoliciesResult <a name="DataCloudflareNotificationPoliciesResult" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult()
```


### DataCloudflareNotificationPoliciesResultFilters <a name="DataCloudflareNotificationPoliciesResultFilters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters()
```


### DataCloudflareNotificationPoliciesResultMechanisms <a name="DataCloudflareNotificationPoliciesResultMechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms()
```


### DataCloudflareNotificationPoliciesResultMechanismsEmail <a name="DataCloudflareNotificationPoliciesResultMechanismsEmail" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail()
```


### DataCloudflareNotificationPoliciesResultMechanismsPagerduty <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty()
```


### DataCloudflareNotificationPoliciesResultMechanismsWebhooks <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPoliciesResultFiltersOutputReference <a name="DataCloudflareNotificationPoliciesResultFiltersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns">affected_asns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents">affected_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations">affected_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode">airport_code</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences">alert_trigger_preferences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue">alert_trigger_preferences_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled">enabled</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment">environment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event">event</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource">event_source</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType">event_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId">health_check_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact">incident_impact</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId">input_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass">insight_class</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit">limit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag">logo_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond">megabits_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth">new_health</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus">new_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond">packets_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId">pool_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames">pop_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product">product</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId">project_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol">protocol</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag">query_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond">requests_per_second</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors">selectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo">slo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname">target_hostname</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp">target_ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName">target_zone_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions">traffic_exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId">tunnel_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName">tunnel_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.type">type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where">where</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_asns`<sup>Required</sup> <a name="affected_asns" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns"></a>

```python
affected_asns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_components`<sup>Required</sup> <a name="affected_components" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents"></a>

```python
affected_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `affected_locations`<sup>Required</sup> <a name="affected_locations" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations"></a>

```python
affected_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `airport_code`<sup>Required</sup> <a name="airport_code" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode"></a>

```python
airport_code: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences`<sup>Required</sup> <a name="alert_trigger_preferences" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences"></a>

```python
alert_trigger_preferences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alert_trigger_preferences_value`<sup>Required</sup> <a name="alert_trigger_preferences_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```python
alert_trigger_preferences_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled"></a>

```python
enabled: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment"></a>

```python
environment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event"></a>

```python
event: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource"></a>

```python
event_source: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType"></a>

```python
event_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId"></a>

```python
health_check_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_impact`<sup>Required</sup> <a name="incident_impact" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact"></a>

```python
incident_impact: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_id`<sup>Required</sup> <a name="input_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId"></a>

```python
input_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_class`<sup>Required</sup> <a name="insight_class" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass"></a>

```python
insight_class: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit"></a>

```python
limit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_tag`<sup>Required</sup> <a name="logo_tag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag"></a>

```python
logo_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `megabits_per_second`<sup>Required</sup> <a name="megabits_per_second" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond"></a>

```python
megabits_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_health`<sup>Required</sup> <a name="new_health" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth"></a>

```python
new_health: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_status`<sup>Required</sup> <a name="new_status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus"></a>

```python
new_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `packets_per_second`<sup>Required</sup> <a name="packets_per_second" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond"></a>

```python
packets_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId"></a>

```python
pool_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pop_names`<sup>Required</sup> <a name="pop_names" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames"></a>

```python
pop_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product"></a>

```python
product: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId"></a>

```python
project_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol"></a>

```python
protocol: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_tag`<sup>Required</sup> <a name="query_tag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag"></a>

```python
query_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requests_per_second`<sup>Required</sup> <a name="requests_per_second" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond"></a>

```python
requests_per_second: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors"></a>

```python
selectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo"></a>

```python
slo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_hostname`<sup>Required</sup> <a name="target_hostname" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname"></a>

```python
target_hostname: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp"></a>

```python
target_ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_zone_name`<sup>Required</sup> <a name="target_zone_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName"></a>

```python
target_zone_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `traffic_exclusions`<sup>Required</sup> <a name="traffic_exclusions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions"></a>

```python
traffic_exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId"></a>

```python
tunnel_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_name`<sup>Required</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName"></a>

```python
tunnel_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where"></a>

```python
where: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResultFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a>

---


### DataCloudflareNotificationPoliciesResultList <a name="DataCloudflareNotificationPoliciesResultList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareNotificationPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailList <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResultMechanismsEmail
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email"></a>

```python
email: DataCloudflareNotificationPoliciesResultMechanismsEmailList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty"></a>

```python
pagerduty: DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks"></a>

```python
webhooks: DataCloudflareNotificationPoliciesResultMechanismsWebhooksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResultMechanisms
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResultMechanismsPagerduty
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksList <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResultMechanismsWebhooks
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a>

---


### DataCloudflareNotificationPoliciesResultOutputReference <a name="DataCloudflareNotificationPoliciesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_notification_policies

dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval">alert_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType">alert_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_interval`<sup>Required</sup> <a name="alert_interval" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval"></a>

```python
alert_interval: str
```

- *Type:* str

---

##### `alert_type`<sup>Required</sup> <a name="alert_type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType"></a>

```python
alert_type: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters"></a>

```python
filters: DataCloudflareNotificationPoliciesResultFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms"></a>

```python
mechanisms: DataCloudflareNotificationPoliciesResultMechanismsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareNotificationPoliciesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a>

---



