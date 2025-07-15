# `dataCloudflareHyperdriveConfigs` Submodule <a name="`dataCloudflareHyperdriveConfigs` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareHyperdriveConfigs <a name="DataCloudflareHyperdriveConfigs" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs cloudflare_hyperdrive_configs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.accountId"></a>

- *Type:* str

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs#account_id DataCloudflareHyperdriveConfigs#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs#max_items DataCloudflareHyperdriveConfigs#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareHyperdriveConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareHyperdriveConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareHyperdriveConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareHyperdriveConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareHyperdriveConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList">DataCloudflareHyperdriveConfigsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.result"></a>

```python
result: DataCloudflareHyperdriveConfigsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList">DataCloudflareHyperdriveConfigsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareHyperdriveConfigsConfig <a name="DataCloudflareHyperdriveConfigsConfig" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.accountId">account_id</a></code> | <code>str</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs#account_id DataCloudflareHyperdriveConfigs#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/hyperdrive_configs#max_items DataCloudflareHyperdriveConfigs#max_items}

---

### DataCloudflareHyperdriveConfigsResult <a name="DataCloudflareHyperdriveConfigsResult" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResult()
```


### DataCloudflareHyperdriveConfigsResultCaching <a name="DataCloudflareHyperdriveConfigsResultCaching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCaching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCaching.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCaching()
```


### DataCloudflareHyperdriveConfigsResultMtls <a name="DataCloudflareHyperdriveConfigsResultMtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtls.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtls()
```


### DataCloudflareHyperdriveConfigsResultOrigin <a name="DataCloudflareHyperdriveConfigsResultOrigin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOrigin()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareHyperdriveConfigsResultCachingOutputReference <a name="DataCloudflareHyperdriveConfigsResultCachingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.staleWhileRevalidate">stale_while_revalidate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCaching">DataCloudflareHyperdriveConfigsResultCaching</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stale_while_revalidate`<sup>Required</sup> <a name="stale_while_revalidate" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.staleWhileRevalidate"></a>

```python
stale_while_revalidate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareHyperdriveConfigsResultCaching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCaching">DataCloudflareHyperdriveConfigsResultCaching</a>

---


### DataCloudflareHyperdriveConfigsResultList <a name="DataCloudflareHyperdriveConfigsResultList" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareHyperdriveConfigsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareHyperdriveConfigsResultMtlsOutputReference <a name="DataCloudflareHyperdriveConfigsResultMtlsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.sslmode">sslmode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtls">DataCloudflareHyperdriveConfigsResultMtls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_id`<sup>Required</sup> <a name="ca_certificate_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

---

##### `mtls_certificate_id`<sup>Required</sup> <a name="mtls_certificate_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.mtlsCertificateId"></a>

```python
mtls_certificate_id: str
```

- *Type:* str

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareHyperdriveConfigsResultMtls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtls">DataCloudflareHyperdriveConfigsResultMtls</a>

---


### DataCloudflareHyperdriveConfigsResultOriginOutputReference <a name="DataCloudflareHyperdriveConfigsResultOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.accessClientId">access_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.accessClientSecret">access_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOrigin">DataCloudflareHyperdriveConfigsResultOrigin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_client_id`<sup>Required</sup> <a name="access_client_id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.accessClientId"></a>

```python
access_client_id: str
```

- *Type:* str

---

##### `access_client_secret`<sup>Required</sup> <a name="access_client_secret" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.accessClientSecret"></a>

```python
access_client_secret: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareHyperdriveConfigsResultOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOrigin">DataCloudflareHyperdriveConfigsResultOrigin</a>

---


### DataCloudflareHyperdriveConfigsResultOutputReference <a name="DataCloudflareHyperdriveConfigsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_hyperdrive_configs

dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference">DataCloudflareHyperdriveConfigsResultCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference">DataCloudflareHyperdriveConfigsResultMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference">DataCloudflareHyperdriveConfigsResultOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.originConnectionLimit">origin_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResult">DataCloudflareHyperdriveConfigsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.caching"></a>

```python
caching: DataCloudflareHyperdriveConfigsResultCachingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultCachingOutputReference">DataCloudflareHyperdriveConfigsResultCachingOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.mtls"></a>

```python
mtls: DataCloudflareHyperdriveConfigsResultMtlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultMtlsOutputReference">DataCloudflareHyperdriveConfigsResultMtlsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.origin"></a>

```python
origin: DataCloudflareHyperdriveConfigsResultOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOriginOutputReference">DataCloudflareHyperdriveConfigsResultOriginOutputReference</a>

---

##### `origin_connection_limit`<sup>Required</sup> <a name="origin_connection_limit" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.originConnectionLimit"></a>

```python
origin_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareHyperdriveConfigsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareHyperdriveConfigs.DataCloudflareHyperdriveConfigsResult">DataCloudflareHyperdriveConfigsResult</a>

---



