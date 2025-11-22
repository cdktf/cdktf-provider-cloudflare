# `dataCloudflareOrganizations` Submodule <a name="`dataCloudflareOrganizations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganizations <a name="DataCloudflareOrganizations" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations cloudflare_organizations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containing: DataCloudflareOrganizationsContaining = None,
  id: typing.List[str] = None,
  max_items: typing.Union[int, float] = None,
  name: DataCloudflareOrganizationsName = None,
  page_size: typing.Union[int, float] = None,
  page_token: str = None,
  parent: DataCloudflareOrganizationsParent = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id">id</a></code> | <code>typing.List[str]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageToken">page_token</a></code> | <code>str</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.containing"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id"></a>

- *Type:* typing.List[str]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}

---

##### `page_token`<sup>Optional</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.pageToken"></a>

- *Type:* str

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.parent"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining">put_containing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent">put_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining">reset_containing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken">reset_page_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent">reset_parent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_containing` <a name="put_containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining"></a>

```python
def put_containing(
  account: str = None,
  organization: str = None,
  user: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining.parameter.account"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining.parameter.organization"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining.parameter.user"></a>

- *Type:* str

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}

---

##### `put_name` <a name="put_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName"></a>

```python
def put_name(
  contains: str = None,
  ends_with: str = None,
  starts_with: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName.parameter.contains"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}

---

###### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName.parameter.endsWith"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}

---

###### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName.parameter.startsWith"></a>

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}

---

##### `put_parent` <a name="put_parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent"></a>

```python
def put_parent() -> None
```

##### `reset_containing` <a name="reset_containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining"></a>

```python
def reset_containing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_page_token` <a name="reset_page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken"></a>

```python
def reset_page_token() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent"></a>

```python
def reset_parent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareOrganizations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareOrganizations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganizations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput">containing_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput">name_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput">page_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput">parent_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken">page_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `containing`<sup>Required</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing"></a>

```python
containing: DataCloudflareOrganizationsContainingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name"></a>

```python
name: DataCloudflareOrganizationsNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent"></a>

```python
parent: DataCloudflareOrganizationsParentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result"></a>

```python
result: DataCloudflareOrganizationsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a>

---

##### `containing_input`<sup>Optional</sup> <a name="containing_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput"></a>

```python
containing_input: IResolvable | DataCloudflareOrganizationsContaining
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput"></a>

```python
name_input: IResolvable | DataCloudflareOrganizationsName
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_token_input`<sup>Optional</sup> <a name="page_token_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput"></a>

```python
page_token_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput"></a>

```python
parent_input: IResolvable | DataCloudflareOrganizationsParent
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_token`<sup>Required</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken"></a>

```python
page_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationsConfig <a name="DataCloudflareOrganizationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containing: DataCloudflareOrganizationsContaining = None,
  id: typing.List[str] = None,
  max_items: typing.Union[int, float] = None,
  name: DataCloudflareOrganizationsName = None,
  page_size: typing.Union[int, float] = None,
  page_token: str = None,
  parent: DataCloudflareOrganizationsParent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id">id</a></code> | <code>typing.List[str]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken">page_token</a></code> | <code>str</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing"></a>

```python
containing: DataCloudflareOrganizationsContaining
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name"></a>

```python
name: DataCloudflareOrganizationsName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}

---

##### `page_token`<sup>Optional</sup> <a name="page_token" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken"></a>

```python
page_token: str
```

- *Type:* str

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent"></a>

```python
parent: DataCloudflareOrganizationsParent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}.

---

### DataCloudflareOrganizationsContaining <a name="DataCloudflareOrganizationsContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsContaining(
  account: str = None,
  organization: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account">account</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization">organization</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user">user</a></code> | <code>str</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account"></a>

```python
account: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization"></a>

```python
organization: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user"></a>

```python
user: str
```

- *Type:* str

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}

---

### DataCloudflareOrganizationsName <a name="DataCloudflareOrganizationsName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsName(
  contains: str = None,
  ends_with: str = None,
  starts_with: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains">contains</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith">ends_with</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith">starts_with</a></code> | <code>str</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains"></a>

```python
contains: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}

---

##### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith"></a>

```python
ends_with: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}

---

### DataCloudflareOrganizationsParent <a name="DataCloudflareOrganizationsParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsParent()
```


### DataCloudflareOrganizationsResult <a name="DataCloudflareOrganizationsResult" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResult()
```


### DataCloudflareOrganizationsResultMeta <a name="DataCloudflareOrganizationsResultMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta()
```


### DataCloudflareOrganizationsResultMetaFlags <a name="DataCloudflareOrganizationsResultMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags()
```


### DataCloudflareOrganizationsResultParent <a name="DataCloudflareOrganizationsResultParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent()
```


### DataCloudflareOrganizationsResultProfile <a name="DataCloudflareOrganizationsResultProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationsContainingOutputReference <a name="DataCloudflareOrganizationsContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationsContaining
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---


### DataCloudflareOrganizationsNameOutputReference <a name="DataCloudflareOrganizationsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith">reset_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_ends_with` <a name="reset_ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith"></a>

```python
def reset_ends_with() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput">ends_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith">ends_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `ends_with_input`<sup>Optional</sup> <a name="ends_with_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput"></a>

```python
ends_with_input: str
```

- *Type:* str

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith"></a>

```python
ends_with: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationsName
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---


### DataCloudflareOrganizationsParentOutputReference <a name="DataCloudflareOrganizationsParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareOrganizationsParent
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---


### DataCloudflareOrganizationsResultList <a name="DataCloudflareOrganizationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareOrganizationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareOrganizationsResultMetaFlagsOutputReference <a name="DataCloudflareOrganizationsResultMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation">account_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion">account_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration">account_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility">account_mobility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation">sub_org_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_creation`<sup>Required</sup> <a name="account_creation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation"></a>

```python
account_creation: str
```

- *Type:* str

---

##### `account_deletion`<sup>Required</sup> <a name="account_deletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion"></a>

```python
account_deletion: str
```

- *Type:* str

---

##### `account_migration`<sup>Required</sup> <a name="account_migration" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration"></a>

```python
account_migration: str
```

- *Type:* str

---

##### `account_mobility`<sup>Required</sup> <a name="account_mobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility"></a>

```python
account_mobility: str
```

- *Type:* str

---

##### `sub_org_creation`<sup>Required</sup> <a name="sub_org_creation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation"></a>

```python
sub_org_creation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationsResultMetaFlags
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a>

---


### DataCloudflareOrganizationsResultMetaOutputReference <a name="DataCloudflareOrganizationsResultMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy">managed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags"></a>

```python
flags: DataCloudflareOrganizationsResultMetaFlagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a>

---

##### `managed_by`<sup>Required</sup> <a name="managed_by" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy"></a>

```python
managed_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationsResultMeta
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a>

---


### DataCloudflareOrganizationsResultOutputReference <a name="DataCloudflareOrganizationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta"></a>

```python
meta: DataCloudflareOrganizationsResultMetaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent"></a>

```python
parent: DataCloudflareOrganizationsResultParentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile"></a>

```python
profile: DataCloudflareOrganizationsResultProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a>

---


### DataCloudflareOrganizationsResultParentOutputReference <a name="DataCloudflareOrganizationsResultParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationsResultParent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a>

---


### DataCloudflareOrganizationsResultProfileOutputReference <a name="DataCloudflareOrganizationsResultProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_organizations

dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress">business_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail">business_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName">business_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone">business_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata">external_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_address`<sup>Required</sup> <a name="business_address" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress"></a>

```python
business_address: str
```

- *Type:* str

---

##### `business_email`<sup>Required</sup> <a name="business_email" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail"></a>

```python
business_email: str
```

- *Type:* str

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

---

##### `business_phone`<sup>Required</sup> <a name="business_phone" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone"></a>

```python
business_phone: str
```

- *Type:* str

---

##### `external_metadata`<sup>Required</sup> <a name="external_metadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata"></a>

```python
external_metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareOrganizationsResultProfile
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a>

---



