# `dataCloudflareLeakedCredentialCheckRules` Submodule <a name="`dataCloudflareLeakedCredentialCheckRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLeakedCredentialCheckRules <a name="DataCloudflareLeakedCredentialCheckRules" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.zoneId"></a>

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules#zone_id DataCloudflareLeakedCredentialCheckRules#zone_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules#max_items DataCloudflareLeakedCredentialCheckRules#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareLeakedCredentialCheckRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList">DataCloudflareLeakedCredentialCheckRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.result"></a>

```python
result: DataCloudflareLeakedCredentialCheckRulesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList">DataCloudflareLeakedCredentialCheckRulesResultList</a>

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLeakedCredentialCheckRulesConfig <a name="DataCloudflareLeakedCredentialCheckRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules#zone_id DataCloudflareLeakedCredentialCheckRules#zone_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/leaked_credential_check_rules#max_items DataCloudflareLeakedCredentialCheckRules#max_items}

---

### DataCloudflareLeakedCredentialCheckRulesResult <a name="DataCloudflareLeakedCredentialCheckRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLeakedCredentialCheckRulesResultList <a name="DataCloudflareLeakedCredentialCheckRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareLeakedCredentialCheckRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareLeakedCredentialCheckRulesResultOutputReference <a name="DataCloudflareLeakedCredentialCheckRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_leaked_credential_check_rules

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult">DataCloudflareLeakedCredentialCheckRulesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareLeakedCredentialCheckRulesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult">DataCloudflareLeakedCredentialCheckRulesResult</a>

---



