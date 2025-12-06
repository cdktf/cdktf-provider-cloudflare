# `dataCloudflareConnectivityDirectoryServices` Submodule <a name="`dataCloudflareConnectivityDirectoryServices` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryServices <a name="DataCloudflareConnectivityDirectoryServices" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices(
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
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.type">type</a></code> | <code>str</code> | Available values: "http". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.type"></a>

- *Type:* str

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareConnectivityDirectoryServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result"></a>

```python
result: DataCloudflareConnectivityDirectoryServicesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServicesConfig <a name="DataCloudflareConnectivityDirectoryServicesConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type">type</a></code> | <code>str</code> | Available values: "http". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}

---

### DataCloudflareConnectivityDirectoryServicesResult <a name="DataCloudflareConnectivityDirectoryServicesResult" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult()
```


### DataCloudflareConnectivityDirectoryServicesResultHost <a name="DataCloudflareConnectivityDirectoryServicesResultHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost()
```


### DataCloudflareConnectivityDirectoryServicesResultHostNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork()
```


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServicesResultHostNetwork
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork">resolver_network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network"></a>

```python
network: DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a>

---

##### `resolver_network`<sup>Required</sup> <a name="resolver_network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork"></a>

```python
resolver_network: DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServicesResultHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps">resolver_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolver_ips`<sup>Required</sup> <a name="resolver_ips" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps"></a>

```python
resolver_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultList <a name="DataCloudflareConnectivityDirectoryServicesResultList" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareConnectivityDirectoryServicesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareConnectivityDirectoryServicesResultOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_services

dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host"></a>

```python
host: DataCloudflareConnectivityDirectoryServicesResultHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a>

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServicesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a>

---



