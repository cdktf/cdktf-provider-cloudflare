# `dataCloudflareMagicTransitSites` Submodule <a name="`dataCloudflareMagicTransitSites` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSites <a name="DataCloudflareMagicTransitSites" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites cloudflare_magic_transit_sites}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites(
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
  connectorid: str = None,
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.connectorid">connectorid</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#account_id DataCloudflareMagicTransitSites#account_id}

---

##### `connectorid`<sup>Optional</sup> <a name="connectorid" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.connectorid"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#connectorid DataCloudflareMagicTransitSites#connectorid}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#max_items DataCloudflareMagicTransitSites#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetConnectorid">reset_connectorid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_connectorid` <a name="reset_connectorid" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetConnectorid"></a>

```python
def reset_connectorid() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSites resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicTransitSites to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicTransitSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList">DataCloudflareMagicTransitSitesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.connectoridInput">connectorid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.connectorid">connectorid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.result"></a>

```python
result: DataCloudflareMagicTransitSitesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList">DataCloudflareMagicTransitSitesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `connectorid_input`<sup>Optional</sup> <a name="connectorid_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.connectoridInput"></a>

```python
connectorid_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `connectorid`<sup>Required</sup> <a name="connectorid" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.connectorid"></a>

```python
connectorid: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSites.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSitesConfig <a name="DataCloudflareMagicTransitSitesConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  connectorid: str = None,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.connectorid">connectorid</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#account_id DataCloudflareMagicTransitSites#account_id}

---

##### `connectorid`<sup>Optional</sup> <a name="connectorid" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.connectorid"></a>

```python
connectorid: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#connectorid DataCloudflareMagicTransitSites#connectorid}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/magic_transit_sites#max_items DataCloudflareMagicTransitSites#max_items}

---

### DataCloudflareMagicTransitSitesResult <a name="DataCloudflareMagicTransitSitesResult" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResult()
```


### DataCloudflareMagicTransitSitesResultLocation <a name="DataCloudflareMagicTransitSitesResultLocation" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocation()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSitesResultList <a name="DataCloudflareMagicTransitSitesResultList" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareMagicTransitSitesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareMagicTransitSitesResultLocationOutputReference <a name="DataCloudflareMagicTransitSitesResultLocationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.lat">lat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.lon">lon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocation">DataCloudflareMagicTransitSitesResultLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.lat"></a>

```python
lat: str
```

- *Type:* str

---

##### `lon`<sup>Required</sup> <a name="lon" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.lon"></a>

```python
lon: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitSitesResultLocation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocation">DataCloudflareMagicTransitSitesResultLocation</a>

---


### DataCloudflareMagicTransitSitesResultOutputReference <a name="DataCloudflareMagicTransitSitesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_transit_sites

dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.haMode">ha_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference">DataCloudflareMagicTransitSitesResultLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.secondaryConnectorId">secondary_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResult">DataCloudflareMagicTransitSitesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.haMode"></a>

```python
ha_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.location"></a>

```python
location: DataCloudflareMagicTransitSitesResultLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultLocationOutputReference">DataCloudflareMagicTransitSitesResultLocationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_connector_id`<sup>Required</sup> <a name="secondary_connector_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.secondaryConnectorId"></a>

```python
secondary_connector_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitSitesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSites.DataCloudflareMagicTransitSitesResult">DataCloudflareMagicTransitSitesResult</a>

---



