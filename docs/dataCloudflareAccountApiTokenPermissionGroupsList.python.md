# `dataCloudflareAccountApiTokenPermissionGroupsList` Submodule <a name="`dataCloudflareAccountApiTokenPermissionGroupsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsList <a name="DataCloudflareAccountApiTokenPermissionGroupsList" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list cloudflare_account_api_token_permission_groups_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList(
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
  max_items: typing.Union[int, float] = None,
  name: str = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.name">name</a></code> | <code>str</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.name"></a>

- *Type:* str

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.Initializer.parameter.scope"></a>

- *Type:* str

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroupsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroupsList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAccountApiTokenPermissionGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.result"></a>

```python
result: DataCloudflareAccountApiTokenPermissionGroupsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList">DataCloudflareAccountApiTokenPermissionGroupsListResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListConfig <a name="DataCloudflareAccountApiTokenPermissionGroupsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name">name</a></code> | <code>str</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope">scope</a></code> | <code>str</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#account_id DataCloudflareAccountApiTokenPermissionGroupsList#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#max_items DataCloudflareAccountApiTokenPermissionGroupsList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#name DataCloudflareAccountApiTokenPermissionGroupsList#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_api_token_permission_groups_list#scope DataCloudflareAccountApiTokenPermissionGroupsList#scope}

---

### DataCloudflareAccountApiTokenPermissionGroupsListResult <a name="DataCloudflareAccountApiTokenPermissionGroupsListResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountApiTokenPermissionGroupsListResultList <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference <a name="DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_api_token_permission_groups_list

dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAccountApiTokenPermissionGroupsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroupsList.DataCloudflareAccountApiTokenPermissionGroupsListResult">DataCloudflareAccountApiTokenPermissionGroupsListResult</a>

---



