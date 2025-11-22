# `dataCloudflareMagicNetworkMonitoringConfiguration` Submodule <a name="`dataCloudflareMagicNetworkMonitoringConfiguration` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringConfiguration <a name="DataCloudflareMagicNetworkMonitoringConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicNetworkMonitoringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling">default_sampling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps">router_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices">warp_devices</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_sampling`<sup>Required</sup> <a name="default_sampling" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.defaultSampling"></a>

```python
default_sampling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `router_ips`<sup>Required</sup> <a name="router_ips" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.routerIps"></a>

```python
router_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warp_devices`<sup>Required</sup> <a name="warp_devices" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.warpDevices"></a>

```python
warp_devices: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationConfig <a name="DataCloudflareMagicNetworkMonitoringConfigurationConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_network_monitoring_configuration#account_id DataCloudflareMagicNetworkMonitoringConfiguration#account_id}.

---

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference <a name="DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_configuration

dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp">router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `router_ip`<sup>Required</sup> <a name="router_ip" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp"></a>

```python
router_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringConfiguration.DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices">DataCloudflareMagicNetworkMonitoringConfigurationWarpDevices</a>

---



