# `dataCloudflareOrganization` Submodule <a name="`dataCloudflareOrganization` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganization <a name="DataCloudflareOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization cloudflare_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: DataCloudflareOrganizationFilter = None,
  organization_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.organizationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId">reset_organization_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter"></a>

```python
def put_filter(
  containing: DataCloudflareOrganizationFilterContaining = None,
  id: typing.List[str] = None,
  name: DataCloudflareOrganizationFilterName = None,
  page_size: typing.Union[int, float] = None,
  page_token: str = None,
  parent: DataCloudflareOrganizationFilterParent = None
) -> None
```

###### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.containing"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.id"></a>

- *Type:* typing.List[str]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}.

---

###### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}

---

###### `page_token`<sup>Optional</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.pageToken"></a>

- *Type:* str

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}

---

###### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.parent"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganization.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareOrganization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter"></a>

```python
filter: DataCloudflareOrganizationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta"></a>

```python
meta: DataCloudflareOrganizationMetaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent"></a>

```python
parent: DataCloudflareOrganizationParentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile"></a>

```python
profile: DataCloudflareOrganizationProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareOrganizationFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationConfig <a name="DataCloudflareOrganizationConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: DataCloudflareOrganizationFilter = None,
  organization_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter"></a>

```python
filter: DataCloudflareOrganizationFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}.

---

### DataCloudflareOrganizationFilter <a name="DataCloudflareOrganizationFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilter(
  containing: DataCloudflareOrganizationFilterContaining = None,
  id: typing.List[str] = None,
  name: DataCloudflareOrganizationFilterName = None,
  page_size: typing.Union[int, float] = None,
  page_token: str = None,
  parent: DataCloudflareOrganizationFilterParent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id">id</a></code> | <code>typing.List[str]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken">page_token</a></code> | <code>str</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}. |

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing"></a>

```python
containing: DataCloudflareOrganizationFilterContaining
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name"></a>

```python
name: DataCloudflareOrganizationFilterName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}

---

##### `page_token`<sup>Optional</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken"></a>

```python
page_token: str
```

- *Type:* str

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent"></a>

```python
parent: DataCloudflareOrganizationFilterParent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}.

---

### DataCloudflareOrganizationFilterContaining <a name="DataCloudflareOrganizationFilterContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining(
  account: str = None,
  organization: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account">account</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization">organization</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user">user</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account"></a>

```python
account: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#account DataCloudflareOrganization#account}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization"></a>

```python
organization: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user"></a>

```python
user: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#user DataCloudflareOrganization#user}

---

### DataCloudflareOrganizationFilterName <a name="DataCloudflareOrganizationFilterName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterName(
  contains: str = None,
  ends_with: str = None,
  starts_with: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains">contains</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith">ends_with</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith">starts_with</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains"></a>

```python
contains: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}

---

##### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith"></a>

```python
ends_with: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}

---

### DataCloudflareOrganizationFilterParent <a name="DataCloudflareOrganizationFilterParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterParent(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id">id</a></code> | <code>str</code> | Filter the list of organizations to the ones that are a sub-organization of the specified organization. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id"></a>

```python
id: str
```

- *Type:* str

Filter the list of organizations to the ones that are a sub-organization of the specified organization.

"null" is a valid value to provide for this parameter. It means "where
an organization has no parent (i.e. it is a 'root' organization)."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareOrganizationMeta <a name="DataCloudflareOrganizationMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationMeta()
```


### DataCloudflareOrganizationMetaFlags <a name="DataCloudflareOrganizationMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags()
```


### DataCloudflareOrganizationParent <a name="DataCloudflareOrganizationParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationParent()
```


### DataCloudflareOrganizationProfile <a name="DataCloudflareOrganizationProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationFilterContainingOutputReference <a name="DataCloudflareOrganizationFilterContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationFilterContaining
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---


### DataCloudflareOrganizationFilterNameOutputReference <a name="DataCloudflareOrganizationFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith">reset_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_ends_with` <a name="reset_ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith"></a>

```python
def reset_ends_with() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput">ends_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith">ends_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `ends_with_input`<sup>Optional</sup> <a name="ends_with_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput"></a>

```python
ends_with_input: str
```

- *Type:* str

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith"></a>

```python
ends_with: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationFilterName
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---


### DataCloudflareOrganizationFilterOutputReference <a name="DataCloudflareOrganizationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining">put_containing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent">put_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining">reset_containing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken">reset_page_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent">reset_parent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containing` <a name="put_containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining"></a>

```python
def put_containing(
  account: str = None,
  organization: str = None,
  user: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining.parameter.account"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#account DataCloudflareOrganization#account}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining.parameter.organization"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining.parameter.user"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#user DataCloudflareOrganization#user}

---

##### `put_name` <a name="put_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName"></a>

```python
def put_name(
  contains: str = None,
  ends_with: str = None,
  starts_with: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName.parameter.contains"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}

---

###### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName.parameter.endsWith"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}

---

###### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName.parameter.startsWith"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}

---

##### `put_parent` <a name="put_parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent"></a>

```python
def put_parent(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent.parameter.id"></a>

- *Type:* str

Filter the list of organizations to the ones that are a sub-organization of the specified organization.

"null" is a valid value to provide for this parameter. It means "where
an organization has no parent (i.e. it is a 'root' organization)."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_containing` <a name="reset_containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining"></a>

```python
def reset_containing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_page_token` <a name="reset_page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken"></a>

```python
def reset_page_token() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent"></a>

```python
def reset_parent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput">containing_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput">name_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput">page_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput">parent_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken">page_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containing`<sup>Required</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing"></a>

```python
containing: DataCloudflareOrganizationFilterContainingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name"></a>

```python
name: DataCloudflareOrganizationFilterNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent"></a>

```python
parent: DataCloudflareOrganizationFilterParentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a>

---

##### `containing_input`<sup>Optional</sup> <a name="containing_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput"></a>

```python
containing_input: IResolvable | DataCloudflareOrganizationFilterContaining
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput"></a>

```python
name_input: IResolvable | DataCloudflareOrganizationFilterName
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_token_input`<sup>Optional</sup> <a name="page_token_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput"></a>

```python
page_token_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput"></a>

```python
parent_input: IResolvable | DataCloudflareOrganizationFilterParent
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_token`<sup>Required</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken"></a>

```python
page_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---


### DataCloudflareOrganizationFilterParentOutputReference <a name="DataCloudflareOrganizationFilterParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationFilterParent
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---


### DataCloudflareOrganizationMetaFlagsOutputReference <a name="DataCloudflareOrganizationMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation">account_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion">account_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration">account_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility">account_mobility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation">sub_org_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_creation`<sup>Required</sup> <a name="account_creation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation"></a>

```python
account_creation: str
```

- *Type:* str

---

##### `account_deletion`<sup>Required</sup> <a name="account_deletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion"></a>

```python
account_deletion: str
```

- *Type:* str

---

##### `account_migration`<sup>Required</sup> <a name="account_migration" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration"></a>

```python
account_migration: str
```

- *Type:* str

---

##### `account_mobility`<sup>Required</sup> <a name="account_mobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility"></a>

```python
account_mobility: str
```

- *Type:* str

---

##### `sub_org_creation`<sup>Required</sup> <a name="sub_org_creation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation"></a>

```python
sub_org_creation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationMetaFlags
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a>

---


### DataCloudflareOrganizationMetaOutputReference <a name="DataCloudflareOrganizationMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy">managed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags"></a>

```python
flags: DataCloudflareOrganizationMetaFlagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a>

---

##### `managed_by`<sup>Required</sup> <a name="managed_by" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy"></a>

```python
managed_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationMeta
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a>

---


### DataCloudflareOrganizationParentOutputReference <a name="DataCloudflareOrganizationParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationParent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a>

---


### DataCloudflareOrganizationProfileOutputReference <a name="DataCloudflareOrganizationProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organization

dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress">business_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail">business_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName">business_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone">business_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata">external_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_address`<sup>Required</sup> <a name="business_address" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress"></a>

```python
business_address: str
```

- *Type:* str

---

##### `business_email`<sup>Required</sup> <a name="business_email" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail"></a>

```python
business_email: str
```

- *Type:* str

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

---

##### `business_phone`<sup>Required</sup> <a name="business_phone" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone"></a>

```python
business_phone: str
```

- *Type:* str

---

##### `external_metadata`<sup>Required</sup> <a name="external_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata"></a>

```python
external_metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationProfile
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a>

---



