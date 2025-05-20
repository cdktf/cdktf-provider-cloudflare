# `dataCloudflareZeroTrustDeviceCustomProfiles` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfiles` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfiles <a name="DataCloudflareZeroTrustDeviceCustomProfiles" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDeviceCustomProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result"></a>

```python
result: DataCloudflareZeroTrustDeviceCustomProfilesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesConfig <a name="DataCloudflareZeroTrustDeviceCustomProfilesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig(
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}

---

### DataCloudflareZeroTrustDeviceCustomProfilesResult <a name="DataCloudflareZeroTrustDeviceCustomProfilesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult()
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultExclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude()
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains()
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultInclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultInclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude()
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2()
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResultExclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResultInclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave">allowed_to_leave</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch">allow_mode_switch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates">allow_updates</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect">auto_connect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal">captive_portal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback">disable_auto_fallback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps">exclude_office_ips</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains">fallback_domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId">gateway_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes">lan_allow_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize">lan_allow_subnet_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns">register_interface_ip_with_dns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.sccmVpnBoundarySupport">sccm_vpn_boundary_support</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2">service_mode_v2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked">switch_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests">target_tests</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol">tunnel_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_to_leave`<sup>Required</sup> <a name="allowed_to_leave" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave"></a>

```python
allowed_to_leave: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_mode_switch`<sup>Required</sup> <a name="allow_mode_switch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch"></a>

```python
allow_mode_switch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_updates`<sup>Required</sup> <a name="allow_updates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates"></a>

```python
allow_updates: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_connect`<sup>Required</sup> <a name="auto_connect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect"></a>

```python
auto_connect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captive_portal`<sup>Required</sup> <a name="captive_portal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal"></a>

```python
captive_portal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_auto_fallback`<sup>Required</sup> <a name="disable_auto_fallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback"></a>

```python
disable_auto_fallback: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude"></a>

```python
exclude: DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a>

---

##### `exclude_office_ips`<sup>Required</sup> <a name="exclude_office_ips" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps"></a>

```python
exclude_office_ips: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `fallback_domains`<sup>Required</sup> <a name="fallback_domains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains"></a>

```python
fallback_domains: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a>

---

##### `gateway_unique_id`<sup>Required</sup> <a name="gateway_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId"></a>

```python
gateway_unique_id: str
```

- *Type:* str

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include"></a>

```python
include: DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a>

---

##### `lan_allow_minutes`<sup>Required</sup> <a name="lan_allow_minutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes"></a>

```python
lan_allow_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lan_allow_subnet_size`<sup>Required</sup> <a name="lan_allow_subnet_size" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize"></a>

```python
lan_allow_subnet_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `register_interface_ip_with_dns`<sup>Required</sup> <a name="register_interface_ip_with_dns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns"></a>

```python
register_interface_ip_with_dns: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sccm_vpn_boundary_support`<sup>Required</sup> <a name="sccm_vpn_boundary_support" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.sccmVpnBoundarySupport"></a>

```python
sccm_vpn_boundary_support: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_mode_v2`<sup>Required</sup> <a name="service_mode_v2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2"></a>

```python
service_mode_v2: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a>

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `switch_locked`<sup>Required</sup> <a name="switch_locked" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked"></a>

```python
switch_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `target_tests`<sup>Required</sup> <a name="target_tests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests"></a>

```python
target_tests: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a>

---

##### `tunnel_protocol`<sup>Required</sup> <a name="tunnel_protocol" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol"></a>

```python
tunnel_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profiles

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a>

---



