# `dataCloudflareWebAnalyticsSites` Submodule <a name="`dataCloudflareWebAnalyticsSites` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWebAnalyticsSites <a name="DataCloudflareWebAnalyticsSites" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites cloudflare_web_analytics_sites}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites(
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
  order_by: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#account_id DataCloudflareWebAnalyticsSites#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#max_items DataCloudflareWebAnalyticsSites#max_items}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.orderBy"></a>

- *Type:* str

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#order_by DataCloudflareWebAnalyticsSites#order_by}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOrderBy">reset_order_by</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareWebAnalyticsSites resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareWebAnalyticsSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWebAnalyticsSites to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWebAnalyticsSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWebAnalyticsSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList">DataCloudflareWebAnalyticsSitesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.result"></a>

```python
result: DataCloudflareWebAnalyticsSitesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList">DataCloudflareWebAnalyticsSitesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWebAnalyticsSitesConfig <a name="DataCloudflareWebAnalyticsSitesConfig" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  order_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.orderBy">order_by</a></code> | <code>str</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#account_id DataCloudflareWebAnalyticsSites#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#max_items DataCloudflareWebAnalyticsSites#max_items}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/web_analytics_sites#order_by DataCloudflareWebAnalyticsSites#order_by}

---

### DataCloudflareWebAnalyticsSitesResult <a name="DataCloudflareWebAnalyticsSitesResult" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult()
```


### DataCloudflareWebAnalyticsSitesResultRules <a name="DataCloudflareWebAnalyticsSitesResultRules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules()
```


### DataCloudflareWebAnalyticsSitesResultRuleset <a name="DataCloudflareWebAnalyticsSitesResultRuleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWebAnalyticsSitesResultList <a name="DataCloudflareWebAnalyticsSitesResultList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWebAnalyticsSitesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWebAnalyticsSitesResultOutputReference <a name="DataCloudflareWebAnalyticsSitesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.autoInstall">auto_install</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList">DataCloudflareWebAnalyticsSitesResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.ruleset">ruleset</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference">DataCloudflareWebAnalyticsSitesResultRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteTag">site_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteToken">site_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.snippet">snippet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult">DataCloudflareWebAnalyticsSitesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_install`<sup>Required</sup> <a name="auto_install" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.autoInstall"></a>

```python
auto_install: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.rules"></a>

```python
rules: DataCloudflareWebAnalyticsSitesResultRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList">DataCloudflareWebAnalyticsSitesResultRulesList</a>

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.ruleset"></a>

```python
ruleset: DataCloudflareWebAnalyticsSitesResultRulesetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference">DataCloudflareWebAnalyticsSitesResultRulesetOutputReference</a>

---

##### `site_tag`<sup>Required</sup> <a name="site_tag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteTag"></a>

```python
site_tag: str
```

- *Type:* str

---

##### `site_token`<sup>Required</sup> <a name="site_token" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteToken"></a>

```python
site_token: str
```

- *Type:* str

---

##### `snippet`<sup>Required</sup> <a name="snippet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.snippet"></a>

```python
snippet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWebAnalyticsSitesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult">DataCloudflareWebAnalyticsSitesResult</a>

---


### DataCloudflareWebAnalyticsSitesResultRulesetOutputReference <a name="DataCloudflareWebAnalyticsSitesResultRulesetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneTag">zone_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset">DataCloudflareWebAnalyticsSitesResultRuleset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `zone_tag`<sup>Required</sup> <a name="zone_tag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneTag"></a>

```python
zone_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWebAnalyticsSitesResultRuleset
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset">DataCloudflareWebAnalyticsSitesResultRuleset</a>

---


### DataCloudflareWebAnalyticsSitesResultRulesList <a name="DataCloudflareWebAnalyticsSitesResultRulesList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWebAnalyticsSitesResultRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWebAnalyticsSitesResultRulesOutputReference <a name="DataCloudflareWebAnalyticsSitesResultRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_web_analytics_sites

dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.inclusive">inclusive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.isPaused">is_paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules">DataCloudflareWebAnalyticsSitesResultRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.inclusive"></a>

```python
inclusive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_paused`<sup>Required</sup> <a name="is_paused" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.isPaused"></a>

```python
is_paused: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWebAnalyticsSitesResultRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules">DataCloudflareWebAnalyticsSitesResultRules</a>

---



