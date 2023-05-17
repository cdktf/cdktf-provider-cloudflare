# `cloudflare_device_posture_rule`

Refer to the Terraform Registory for docs: [`cloudflare_device_posture_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule).

# `devicePostureRule` Submodule <a name="`devicePostureRule` Submodule" id="@cdktf/provider-cloudflare.devicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureRule <a name="DevicePostureRule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule cloudflare_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRule(
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
  type: str,
  description: str = None,
  expiration: str = None,
  id: str = None,
  input: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]] = None,
  match: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]] = None,
  name: str = None,
  schedule: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.type">type</a></code> | <code>str</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.expiration">expiration</a></code> | <code>str</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.match">match</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]</code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Tells the client when to run the device posture check. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.type"></a>

- *Type:* str

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.expiration"></a>

- *Type:* str

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.input"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.match"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.name"></a>

- *Type:* str

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.schedule"></a>

- *Type:* str

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_input` <a name="put_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]

---

##### `put_match` <a name="put_match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch"></a>

```python
def put_match(
  value: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule"></a>

```python
def reset_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput">match_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input"></a>

```python
input: DevicePostureRuleInputList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match"></a>

```python
match: DevicePostureRuleMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput"></a>

```python
match_input: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureRuleConfig <a name="DevicePostureRuleConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  type: str,
  description: str = None,
  expiration: str = None,
  id: str = None,
  input: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]] = None,
  match: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]] = None,
  name: str = None,
  schedule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type">type</a></code> | <code>str</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration">expiration</a></code> | <code>str</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match">match</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]</code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name">name</a></code> | <code>str</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule">schedule</a></code> | <code>str</code> | Tells the client when to run the device posture check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match"></a>

```python
match: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

### DevicePostureRuleInput <a name="DevicePostureRuleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleInput(
  check_disks: typing.List[str] = None,
  compliance_status: str = None,
  connection_id: str = None,
  domain: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  exists: typing.Union[bool, IResolvable] = None,
  id: str = None,
  operator: str = None,
  os: str = None,
  os_distro_name: str = None,
  os_distro_revision: str = None,
  overall: str = None,
  path: str = None,
  require_all: typing.Union[bool, IResolvable] = None,
  running: typing.Union[bool, IResolvable] = None,
  sensor_config: str = None,
  sha256: str = None,
  thumbprint: str = None,
  version: str = None,
  version_operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks">check_disks</a></code> | <code>typing.List[str]</code> | Specific volume(s) to check for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus">compliance_status</a></code> | <code>str</code> | The workspace one device compliance status. Available values: `compliant`, `noncompliant`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId">connection_id</a></code> | <code>str</code> | The workspace one connection id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain">domain</a></code> | <code>str</code> | The domain that the client must join. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the firewall must be enabled. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists">exists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Checks if the file should exist. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id">id</a></code> | <code>str</code> | The Teams List id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator">operator</a></code> | <code>str</code> | The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os">os</a></code> | <code>str</code> | OS signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName">os_distro_name</a></code> | <code>str</code> | The operating system excluding version information. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision">os_distro_revision</a></code> | <code>str</code> | The operating system version excluding OS name information or release name. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall">overall</a></code> | <code>str</code> | Overall ZTA score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path">path</a></code> | <code>str</code> | The path to the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll">require_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if all drives must be encrypted. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running">running</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Checks if the application should be running. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig">sensor_config</a></code> | <code>str</code> | Sensor signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256">sha256</a></code> | <code>str</code> | The sha256 hash of the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint">thumbprint</a></code> | <code>str</code> | The thumbprint of the file certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version">version</a></code> | <code>str</code> | The operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator">version_operator</a></code> | <code>str</code> | The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`. |

---

##### `check_disks`<sup>Optional</sup> <a name="check_disks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks"></a>

```python
check_disks: typing.List[str]
```

- *Type:* typing.List[str]

Specific volume(s) to check for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#check_disks DevicePostureRule#check_disks}

---

##### `compliance_status`<sup>Optional</sup> <a name="compliance_status" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus"></a>

```python
compliance_status: str
```

- *Type:* str

The workspace one device compliance status. Available values: `compliant`, `noncompliant`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#compliance_status DevicePostureRule#compliance_status}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The workspace one connection id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#connection_id DevicePostureRule#connection_id}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain that the client must join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#domain DevicePostureRule#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the firewall must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#enabled DevicePostureRule#enabled}

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists"></a>

```python
exists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Checks if the file should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#exists DevicePostureRule#exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id"></a>

```python
id: str
```

- *Type:* str

The Teams List id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#id DevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator"></a>

```python
operator: str
```

- *Type:* str

The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#operator DevicePostureRule#operator}

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os"></a>

```python
os: str
```

- *Type:* str

OS signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#os DevicePostureRule#os}

---

##### `os_distro_name`<sup>Optional</sup> <a name="os_distro_name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName"></a>

```python
os_distro_name: str
```

- *Type:* str

The operating system excluding version information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#os_distro_name DevicePostureRule#os_distro_name}

---

##### `os_distro_revision`<sup>Optional</sup> <a name="os_distro_revision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision"></a>

```python
os_distro_revision: str
```

- *Type:* str

The operating system version excluding OS name information or release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#os_distro_revision DevicePostureRule#os_distro_revision}

---

##### `overall`<sup>Optional</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall"></a>

```python
overall: str
```

- *Type:* str

Overall ZTA score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#overall DevicePostureRule#overall}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#path DevicePostureRule#path}

---

##### `require_all`<sup>Optional</sup> <a name="require_all" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll"></a>

```python
require_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if all drives must be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#require_all DevicePostureRule#require_all}

---

##### `running`<sup>Optional</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running"></a>

```python
running: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Checks if the application should be running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#running DevicePostureRule#running}

---

##### `sensor_config`<sup>Optional</sup> <a name="sensor_config" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig"></a>

```python
sensor_config: str
```

- *Type:* str

Sensor signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#sensor_config DevicePostureRule#sensor_config}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

The sha256 hash of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#sha256 DevicePostureRule#sha256}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

The thumbprint of the file certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#thumbprint DevicePostureRule#thumbprint}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version"></a>

```python
version: str
```

- *Type:* str

The operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#version DevicePostureRule#version}

---

##### `version_operator`<sup>Optional</sup> <a name="version_operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator"></a>

```python
version_operator: str
```

- *Type:* str

The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#version_operator DevicePostureRule#version_operator}

---

### DevicePostureRuleMatch <a name="DevicePostureRuleMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleMatch(
  platform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform">platform</a></code> | <code>str</code> | The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`. |

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.6.0/docs/resources/device_posture_rule#platform DevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureRuleInputList <a name="DevicePostureRuleInputList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevicePostureRuleInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevicePostureRuleInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>]]

---


### DevicePostureRuleInputOutputReference <a name="DevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks">reset_check_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus">reset_compliance_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists">reset_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs">reset_os</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName">reset_os_distro_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision">reset_os_distro_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall">reset_overall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll">reset_require_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning">reset_running</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig">reset_sensor_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256">reset_sha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint">reset_thumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator">reset_version_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_disks` <a name="reset_check_disks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```python
def reset_check_disks() -> None
```

##### `reset_compliance_status` <a name="reset_compliance_status" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```python
def reset_compliance_status() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exists` <a name="reset_exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists"></a>

```python
def reset_exists() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_os` <a name="reset_os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs"></a>

```python
def reset_os() -> None
```

##### `reset_os_distro_name` <a name="reset_os_distro_name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```python
def reset_os_distro_name() -> None
```

##### `reset_os_distro_revision` <a name="reset_os_distro_revision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```python
def reset_os_distro_revision() -> None
```

##### `reset_overall` <a name="reset_overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall"></a>

```python
def reset_overall() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_require_all` <a name="reset_require_all" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll"></a>

```python
def reset_require_all() -> None
```

##### `reset_running` <a name="reset_running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning"></a>

```python
def reset_running() -> None
```

##### `reset_sensor_config` <a name="reset_sensor_config" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```python
def reset_sensor_config() -> None
```

##### `reset_sha256` <a name="reset_sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256"></a>

```python
def reset_sha256() -> None
```

##### `reset_thumbprint` <a name="reset_thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint"></a>

```python
def reset_thumbprint() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_version_operator` <a name="reset_version_operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```python
def reset_version_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput">check_disks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput">compliance_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput">exists_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput">os_distro_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput">os_distro_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput">overall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput">require_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput">running_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput">sensor_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input">sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput">version_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks">check_disks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus">compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists">exists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName">os_distro_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision">os_distro_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall">overall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll">require_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running">running</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig">sensor_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator">version_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_disks_input`<sup>Optional</sup> <a name="check_disks_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```python
check_disks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compliance_status_input`<sup>Optional</sup> <a name="compliance_status_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```python
compliance_status_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exists_input`<sup>Optional</sup> <a name="exists_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput"></a>

```python
exists_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `os_distro_name_input`<sup>Optional</sup> <a name="os_distro_name_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```python
os_distro_name_input: str
```

- *Type:* str

---

##### `os_distro_revision_input`<sup>Optional</sup> <a name="os_distro_revision_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```python
os_distro_revision_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `overall_input`<sup>Optional</sup> <a name="overall_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput"></a>

```python
overall_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `require_all_input`<sup>Optional</sup> <a name="require_all_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```python
require_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `running_input`<sup>Optional</sup> <a name="running_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput"></a>

```python
running_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensor_config_input`<sup>Optional</sup> <a name="sensor_config_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```python
sensor_config_input: str
```

- *Type:* str

---

##### `sha256_input`<sup>Optional</sup> <a name="sha256_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input"></a>

```python
sha256_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version_operator_input`<sup>Optional</sup> <a name="version_operator_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```python
version_operator_input: str
```

- *Type:* str

---

##### `check_disks`<sup>Required</sup> <a name="check_disks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks"></a>

```python
check_disks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compliance_status`<sup>Required</sup> <a name="compliance_status" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```python
compliance_status: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists"></a>

```python
exists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `os_distro_name`<sup>Required</sup> <a name="os_distro_name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName"></a>

```python
os_distro_name: str
```

- *Type:* str

---

##### `os_distro_revision`<sup>Required</sup> <a name="os_distro_revision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```python
os_distro_revision: str
```

- *Type:* str

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall"></a>

```python
overall: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_all`<sup>Required</sup> <a name="require_all" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll"></a>

```python
require_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running"></a>

```python
running: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensor_config`<sup>Required</sup> <a name="sensor_config" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```python
sensor_config: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_operator`<sup>Required</sup> <a name="version_operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator"></a>

```python
version_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DevicePostureRuleInput, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>, cdktf.IResolvable]

---


### DevicePostureRuleMatchList <a name="DevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevicePostureRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevicePostureRuleMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>]]

---


### DevicePostureRuleMatchOutputReference <a name="DevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_rule

devicePostureRule.DevicePostureRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DevicePostureRuleMatch, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>, cdktf.IResolvable]

---



