# `dataCloudflareConnectivityDirectoryService` Submodule <a name="`dataCloudflareConnectivityDirectoryService` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryService <a name="DataCloudflareConnectivityDirectoryService" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService(
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
  filter: DataCloudflareConnectivityDirectoryServiceFilter = None,
  service_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}.

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId">reset_service_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter"></a>

```python
def put_filter(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter.parameter.type"></a>

- *Type:* str

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#type DataCloudflareConnectivityDirectoryService#type}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_service_id` <a name="reset_service_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId"></a>

```python
def reset_service_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter"></a>

```python
filter: DataCloudflareConnectivityDirectoryServiceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host"></a>

```python
host: DataCloudflareConnectivityDirectoryServiceHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a>

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareConnectivityDirectoryServiceFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServiceConfig <a name="DataCloudflareConnectivityDirectoryServiceConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareConnectivityDirectoryServiceFilter = None,
  service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter"></a>

```python
filter: DataCloudflareConnectivityDirectoryServiceFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}.

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}.

---

### DataCloudflareConnectivityDirectoryServiceFilter <a name="DataCloudflareConnectivityDirectoryServiceFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type">type</a></code> | <code>str</code> | Available values: "http". |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_service#type DataCloudflareConnectivityDirectoryService#type}

---

### DataCloudflareConnectivityDirectoryServiceHost <a name="DataCloudflareConnectivityDirectoryServiceHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost()
```


### DataCloudflareConnectivityDirectoryServiceHostNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork()
```


### DataCloudflareConnectivityDirectoryServiceHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServiceFilterOutputReference <a name="DataCloudflareConnectivityDirectoryServiceFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareConnectivityDirectoryServiceFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---


### DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServiceHostNetwork
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServiceHostOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">resolver_network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```python
network: DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `resolver_network`<sup>Required</sup> <a name="resolver_network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```python
resolver_network: DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServiceHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a>

---


### DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_connectivity_directory_service

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">resolver_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolver_ips`<sup>Required</sup> <a name="resolver_ips" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```python
resolver_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareConnectivityDirectoryServiceHostResolverNetwork
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a>

---



