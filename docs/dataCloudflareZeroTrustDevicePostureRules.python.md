# `dataCloudflareZeroTrustDevicePostureRules` Submodule <a name="`dataCloudflareZeroTrustDevicePostureRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureRules <a name="DataCloudflareZeroTrustDevicePostureRules" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#max_items DataCloudflareZeroTrustDevicePostureRules#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDevicePostureRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList">DataCloudflareZeroTrustDevicePostureRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.result"></a>

```python
result: DataCloudflareZeroTrustDevicePostureRulesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList">DataCloudflareZeroTrustDevicePostureRulesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureRulesConfig <a name="DataCloudflareZeroTrustDevicePostureRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#account_id DataCloudflareZeroTrustDevicePostureRules#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/data-sources/zero_trust_device_posture_rules#max_items DataCloudflareZeroTrustDevicePostureRules#max_items}

---

### DataCloudflareZeroTrustDevicePostureRulesResult <a name="DataCloudflareZeroTrustDevicePostureRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult()
```


### DataCloudflareZeroTrustDevicePostureRulesResultInput <a name="DataCloudflareZeroTrustDevicePostureRulesResultInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput()
```


### DataCloudflareZeroTrustDevicePostureRulesResultInputLocations <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputLocations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations()
```


### DataCloudflareZeroTrustDevicePostureRulesResultMatch <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.trustStores">trust_stores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations">DataCloudflareZeroTrustDevicePostureRulesResultInputLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_stores`<sup>Required</sup> <a name="trust_stores" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.trustStores"></a>

```python
trust_stores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRulesResultInputLocations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocations">DataCloudflareZeroTrustDevicePostureRulesResultInputLocations</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.activeThreats">active_threats</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkDisks">check_disks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkPrivateKey">check_private_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.cn">cn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.complianceStatus">compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.countOperator">count_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.eidLastSeen">eid_last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.exists">exists</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.infected">infected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.issueCount">issue_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.lastSeen">last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.networkStatus">network_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroName">os_distro_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroRevision">os_distro_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osVersionExtra">os_version_extra</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.overall">overall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.requireAll">require_all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.scoreOperator">score_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sensorConfig">sensor_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.totalScore">total_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.versionOperator">version_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput">DataCloudflareZeroTrustDevicePostureRulesResultInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_threats`<sup>Required</sup> <a name="active_threats" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.activeThreats"></a>

```python
active_threats: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `check_disks`<sup>Required</sup> <a name="check_disks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkDisks"></a>

```python
check_disks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_private_key`<sup>Required</sup> <a name="check_private_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.checkPrivateKey"></a>

```python
check_private_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.cn"></a>

```python
cn: str
```

- *Type:* str

---

##### `compliance_status`<sup>Required</sup> <a name="compliance_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.complianceStatus"></a>

```python
compliance_status: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `count_operator`<sup>Required</sup> <a name="count_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.countOperator"></a>

```python
count_operator: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `eid_last_seen`<sup>Required</sup> <a name="eid_last_seen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.eidLastSeen"></a>

```python
eid_last_seen: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.exists"></a>

```python
exists: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infected`<sup>Required</sup> <a name="infected" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.infected"></a>

```python
infected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issue_count`<sup>Required</sup> <a name="issue_count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.issueCount"></a>

```python
issue_count: str
```

- *Type:* str

---

##### `last_seen`<sup>Required</sup> <a name="last_seen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.lastSeen"></a>

```python
last_seen: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.locations"></a>

```python
locations: DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference</a>

---

##### `network_status`<sup>Required</sup> <a name="network_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.networkStatus"></a>

```python
network_status: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `os_distro_name`<sup>Required</sup> <a name="os_distro_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroName"></a>

```python
os_distro_name: str
```

- *Type:* str

---

##### `os_distro_revision`<sup>Required</sup> <a name="os_distro_revision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osDistroRevision"></a>

```python
os_distro_revision: str
```

- *Type:* str

---

##### `os_version_extra`<sup>Required</sup> <a name="os_version_extra" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.osVersionExtra"></a>

```python
os_version_extra: str
```

- *Type:* str

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.overall"></a>

```python
overall: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_all`<sup>Required</sup> <a name="require_all" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.requireAll"></a>

```python
require_all: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_operator`<sup>Required</sup> <a name="score_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.scoreOperator"></a>

```python
score_operator: str
```

- *Type:* str

---

##### `sensor_config`<sup>Required</sup> <a name="sensor_config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sensorConfig"></a>

```python
sensor_config: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `total_score`<sup>Required</sup> <a name="total_score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.totalScore"></a>

```python
total_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_operator`<sup>Required</sup> <a name="version_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.versionOperator"></a>

```python
version_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRulesResultInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInput">DataCloudflareZeroTrustDevicePostureRulesResultInput</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultList <a name="DataCloudflareZeroTrustDevicePostureRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDevicePostureRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDevicePostureRulesResultMatchList <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatchList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch">DataCloudflareZeroTrustDevicePostureRulesResultMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRulesResultMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatch">DataCloudflareZeroTrustDevicePostureRulesResultMatch</a>

---


### DataCloudflareZeroTrustDevicePostureRulesResultOutputReference <a name="DataCloudflareZeroTrustDevicePostureRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rules

dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList">DataCloudflareZeroTrustDevicePostureRulesResultMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult">DataCloudflareZeroTrustDevicePostureRulesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.input"></a>

```python
input: DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference">DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.match"></a>

```python
match: DataCloudflareZeroTrustDevicePostureRulesResultMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultMatchList">DataCloudflareZeroTrustDevicePostureRulesResultMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRulesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRules.DataCloudflareZeroTrustDevicePostureRulesResult">DataCloudflareZeroTrustDevicePostureRulesResult</a>

---



