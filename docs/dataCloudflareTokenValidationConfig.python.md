# `dataCloudflareTokenValidationConfig` Submodule <a name="`dataCloudflareTokenValidationConfig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationConfig <a name="DataCloudflareTokenValidationConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config cloudflare_token_validation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_id: str,
  zone_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.configId"></a>

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#config_id DataCloudflareTokenValidationConfig#config_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#zone_id DataCloudflareTokenValidationConfig#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareTokenValidationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareTokenValidationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference">DataCloudflareTokenValidationConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenSources">token_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.credentials"></a>

```python
credentials: DataCloudflareTokenValidationConfigCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference">DataCloudflareTokenValidationConfigCredentialsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `token_sources`<sup>Required</sup> <a name="token_sources" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenSources"></a>

```python
token_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationConfigConfig <a name="DataCloudflareTokenValidationConfigConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_id: str,
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.configId">config_id</a></code> | <code>str</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#config_id DataCloudflareTokenValidationConfig#config_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#zone_id DataCloudflareTokenValidationConfig#zone_id}

---

### DataCloudflareTokenValidationConfigCredentials <a name="DataCloudflareTokenValidationConfigCredentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials()
```


### DataCloudflareTokenValidationConfigCredentialsKeys <a name="DataCloudflareTokenValidationConfigCredentialsKeys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationConfigCredentialsKeysList <a name="DataCloudflareTokenValidationConfigCredentialsKeysList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareTokenValidationConfigCredentialsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareTokenValidationConfigCredentialsKeysOutputReference <a name="DataCloudflareTokenValidationConfigCredentialsKeysOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.alg">alg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.crv">crv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.e">e</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kty">kty</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.n">n</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.x">x</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.y">y</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys">DataCloudflareTokenValidationConfigCredentialsKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.alg"></a>

```python
alg: str
```

- *Type:* str

---

##### `crv`<sup>Required</sup> <a name="crv" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.crv"></a>

```python
crv: str
```

- *Type:* str

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.e"></a>

```python
e: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kty"></a>

```python
kty: str
```

- *Type:* str

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.n"></a>

```python
n: str
```

- *Type:* str

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.x"></a>

```python
x: str
```

- *Type:* str

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.y"></a>

```python
y: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareTokenValidationConfigCredentialsKeys
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys">DataCloudflareTokenValidationConfigCredentialsKeys</a>

---


### DataCloudflareTokenValidationConfigCredentialsOutputReference <a name="DataCloudflareTokenValidationConfigCredentialsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_config

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList">DataCloudflareTokenValidationConfigCredentialsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials">DataCloudflareTokenValidationConfigCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.keys"></a>

```python
keys: DataCloudflareTokenValidationConfigCredentialsKeysList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList">DataCloudflareTokenValidationConfigCredentialsKeysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareTokenValidationConfigCredentials
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials">DataCloudflareTokenValidationConfigCredentials</a>

---



