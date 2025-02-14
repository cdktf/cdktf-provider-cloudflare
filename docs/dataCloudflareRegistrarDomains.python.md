# `dataCloudflareRegistrarDomains` Submodule <a name="`dataCloudflareRegistrarDomains` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRegistrarDomains <a name="DataCloudflareRegistrarDomains" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains cloudflare_registrar_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains#account_id DataCloudflareRegistrarDomains#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains#max_items DataCloudflareRegistrarDomains#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareRegistrarDomains to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareRegistrarDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareRegistrarDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result"></a>

```python
result: DataCloudflareRegistrarDomainsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRegistrarDomainsConfig <a name="DataCloudflareRegistrarDomainsConfig" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains#account_id DataCloudflareRegistrarDomains#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/registrar_domains#max_items DataCloudflareRegistrarDomains#max_items}

---

### DataCloudflareRegistrarDomainsResult <a name="DataCloudflareRegistrarDomainsResult" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult()
```


### DataCloudflareRegistrarDomainsResultRegistrantContact <a name="DataCloudflareRegistrarDomainsResultRegistrantContact" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact()
```


### DataCloudflareRegistrarDomainsResultTransferIn <a name="DataCloudflareRegistrarDomainsResultTransferIn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRegistrarDomainsResultList <a name="DataCloudflareRegistrarDomainsResultList" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareRegistrarDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareRegistrarDomainsResultOutputReference <a name="DataCloudflareRegistrarDomainsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister">can_register</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar">current_registrar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked">locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact">registrant_contact</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses">registry_statuses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld">supported_tld</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn">transfer_in</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available"></a>

```python
available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_register`<sup>Required</sup> <a name="can_register" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister"></a>

```python
can_register: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `current_registrar`<sup>Required</sup> <a name="current_registrar" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar"></a>

```python
current_registrar: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked"></a>

```python
locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `registrant_contact`<sup>Required</sup> <a name="registrant_contact" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact"></a>

```python
registrant_contact: DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a>

---

##### `registry_statuses`<sup>Required</sup> <a name="registry_statuses" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses"></a>

```python
registry_statuses: str
```

- *Type:* str

---

##### `supported_tld`<sup>Required</sup> <a name="supported_tld" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld"></a>

```python
supported_tld: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `transfer_in`<sup>Required</sup> <a name="transfer_in" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn"></a>

```python
transfer_in: DataCloudflareRegistrarDomainsResultTransferInOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareRegistrarDomainsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a>

---


### DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference <a name="DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip">zip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip"></a>

```python
zip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareRegistrarDomainsResultRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a>

---


### DataCloudflareRegistrarDomainsResultTransferInOutputReference <a name="DataCloudflareRegistrarDomainsResultTransferInOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_registrar_domains

dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa">accept_foa</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer">approve_transfer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer">can_cancel_transfer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy">disable_privacy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode">enter_auth_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain">unlock_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_foa`<sup>Required</sup> <a name="accept_foa" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa"></a>

```python
accept_foa: str
```

- *Type:* str

---

##### `approve_transfer`<sup>Required</sup> <a name="approve_transfer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer"></a>

```python
approve_transfer: str
```

- *Type:* str

---

##### `can_cancel_transfer`<sup>Required</sup> <a name="can_cancel_transfer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer"></a>

```python
can_cancel_transfer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disable_privacy`<sup>Required</sup> <a name="disable_privacy" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy"></a>

```python
disable_privacy: str
```

- *Type:* str

---

##### `enter_auth_code`<sup>Required</sup> <a name="enter_auth_code" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode"></a>

```python
enter_auth_code: str
```

- *Type:* str

---

##### `unlock_domain`<sup>Required</sup> <a name="unlock_domain" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain"></a>

```python
unlock_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareRegistrarDomainsResultTransferIn
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a>

---



