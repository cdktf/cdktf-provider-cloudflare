# `dataCloudflareZeroTrustDevicePostureRule` Submodule <a name="`dataCloudflareZeroTrustDevicePostureRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureRule <a name="DataCloudflareZeroTrustDevicePostureRule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule(
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
  rule_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | API UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.ruleId"></a>

- *Type:* str

API UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#rule_id DataCloudflareZeroTrustDevicePostureRule#rule_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetRuleId">reset_rule_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input"></a>

```python
input: DataCloudflareZeroTrustDevicePostureRuleInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match"></a>

```python
match: DataCloudflareZeroTrustDevicePostureRuleMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureRuleConfig <a name="DataCloudflareZeroTrustDevicePostureRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  rule_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId">rule_id</a></code> | <code>str</code> | API UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

API UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_device_posture_rule#rule_id DataCloudflareZeroTrustDevicePostureRule#rule_id}

---

### DataCloudflareZeroTrustDevicePostureRuleInput <a name="DataCloudflareZeroTrustDevicePostureRuleInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput()
```


### DataCloudflareZeroTrustDevicePostureRuleInputLocations <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations()
```


### DataCloudflareZeroTrustDevicePostureRuleMatch <a name="DataCloudflareZeroTrustDevicePostureRuleMatch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores">trust_stores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_stores`<sup>Required</sup> <a name="trust_stores" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores"></a>

```python
trust_stores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRuleInputLocations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a>

---


### DataCloudflareZeroTrustDevicePostureRuleInputOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats">active_threats</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks">check_disks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey">check_private_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn">cn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus">compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator">count_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen">eid_last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists">exists</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected">infected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount">issue_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen">last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus">network_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState">operational_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName">os_distro_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision">os_distro_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra">os_version_extra</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall">overall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll">require_all</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel">risk_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator">score_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig">sensor_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore">total_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator">version_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_threats`<sup>Required</sup> <a name="active_threats" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats"></a>

```python
active_threats: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `check_disks`<sup>Required</sup> <a name="check_disks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks"></a>

```python
check_disks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_private_key`<sup>Required</sup> <a name="check_private_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey"></a>

```python
check_private_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn"></a>

```python
cn: str
```

- *Type:* str

---

##### `compliance_status`<sup>Required</sup> <a name="compliance_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```python
compliance_status: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `count_operator`<sup>Required</sup> <a name="count_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator"></a>

```python
count_operator: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `eid_last_seen`<sup>Required</sup> <a name="eid_last_seen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```python
eid_last_seen: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists"></a>

```python
exists: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infected`<sup>Required</sup> <a name="infected" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected"></a>

```python
infected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issue_count`<sup>Required</sup> <a name="issue_count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount"></a>

```python
issue_count: str
```

- *Type:* str

---

##### `last_seen`<sup>Required</sup> <a name="last_seen" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen"></a>

```python
last_seen: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations"></a>

```python
locations: DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a>

---

##### `network_status`<sup>Required</sup> <a name="network_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus"></a>

```python
network_status: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operational_state`<sup>Required</sup> <a name="operational_state" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState"></a>

```python
operational_state: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `os_distro_name`<sup>Required</sup> <a name="os_distro_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName"></a>

```python
os_distro_name: str
```

- *Type:* str

---

##### `os_distro_revision`<sup>Required</sup> <a name="os_distro_revision" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```python
os_distro_revision: str
```

- *Type:* str

---

##### `os_version_extra`<sup>Required</sup> <a name="os_version_extra" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra"></a>

```python
os_version_extra: str
```

- *Type:* str

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall"></a>

```python
overall: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_all`<sup>Required</sup> <a name="require_all" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll"></a>

```python
require_all: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `risk_level`<sup>Required</sup> <a name="risk_level" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel"></a>

```python
risk_level: str
```

- *Type:* str

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_operator`<sup>Required</sup> <a name="score_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator"></a>

```python
score_operator: str
```

- *Type:* str

---

##### `sensor_config`<sup>Required</sup> <a name="sensor_config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```python
sensor_config: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `total_score`<sup>Required</sup> <a name="total_score" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore"></a>

```python
total_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_operator`<sup>Required</sup> <a name="version_operator" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator"></a>

```python
version_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRuleInput
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a>

---


### DataCloudflareZeroTrustDevicePostureRuleMatchList <a name="DataCloudflareZeroTrustDevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_posture_rule

dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDevicePostureRuleMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a>

---



