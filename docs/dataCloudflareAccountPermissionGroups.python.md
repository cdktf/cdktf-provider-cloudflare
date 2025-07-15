# `dataCloudflareAccountPermissionGroups` Submodule <a name="`dataCloudflareAccountPermissionGroups` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountPermissionGroups <a name="DataCloudflareAccountPermissionGroups" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups cloudflare_account_permission_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups(
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
  id: str = None,
  label: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | ID of the permission group to be fetched. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.label">label</a></code> | <code>str</code> | Label of the permission group to be fetched. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the permission group to be fetched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#account_id DataCloudflareAccountPermissionGroups#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.id"></a>

- *Type:* str

ID of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#id DataCloudflareAccountPermissionGroups#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.label"></a>

- *Type:* str

Label of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#label DataCloudflareAccountPermissionGroups#label}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#max_items DataCloudflareAccountPermissionGroups#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.Initializer.parameter.name"></a>

- *Type:* str

Name of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#name DataCloudflareAccountPermissionGroups#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareAccountPermissionGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareAccountPermissionGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAccountPermissionGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAccountPermissionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountPermissionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList">DataCloudflareAccountPermissionGroupsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.result"></a>

```python
result: DataCloudflareAccountPermissionGroupsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList">DataCloudflareAccountPermissionGroupsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountPermissionGroupsConfig <a name="DataCloudflareAccountPermissionGroupsConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None,
  label: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.id">id</a></code> | <code>str</code> | ID of the permission group to be fetched. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.label">label</a></code> | <code>str</code> | Label of the permission group to be fetched. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.name">name</a></code> | <code>str</code> | Name of the permission group to be fetched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#account_id DataCloudflareAccountPermissionGroups#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#id DataCloudflareAccountPermissionGroups#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Label of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#label DataCloudflareAccountPermissionGroups#label}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#max_items DataCloudflareAccountPermissionGroups#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the permission group to be fetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/account_permission_groups#name DataCloudflareAccountPermissionGroups#name}

---

### DataCloudflareAccountPermissionGroupsResult <a name="DataCloudflareAccountPermissionGroupsResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResult()
```


### DataCloudflareAccountPermissionGroupsResultMeta <a name="DataCloudflareAccountPermissionGroupsResultMeta" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMeta()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountPermissionGroupsResultList <a name="DataCloudflareAccountPermissionGroupsResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAccountPermissionGroupsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAccountPermissionGroupsResultMetaOutputReference <a name="DataCloudflareAccountPermissionGroupsResultMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMeta">DataCloudflareAccountPermissionGroupsResultMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAccountPermissionGroupsResultMeta
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMeta">DataCloudflareAccountPermissionGroupsResultMeta</a>

---


### DataCloudflareAccountPermissionGroupsResultOutputReference <a name="DataCloudflareAccountPermissionGroupsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_permission_groups

dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference">DataCloudflareAccountPermissionGroupsResultMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResult">DataCloudflareAccountPermissionGroupsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.meta"></a>

```python
meta: DataCloudflareAccountPermissionGroupsResultMetaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultMetaOutputReference">DataCloudflareAccountPermissionGroupsResultMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAccountPermissionGroupsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountPermissionGroups.DataCloudflareAccountPermissionGroupsResult">DataCloudflareAccountPermissionGroupsResult</a>

---



