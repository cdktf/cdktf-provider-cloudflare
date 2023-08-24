# `cloudflare_device_posture_integration`

Refer to the Terraform Registory for docs: [`cloudflare_device_posture_integration`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration).

# `devicePostureIntegration` Submodule <a name="`devicePostureIntegration` Submodule" id="@cdktf/provider-cloudflare.devicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureIntegration <a name="DevicePostureIntegration" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration cloudflare_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegration(
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
  name: str,
  type: str,
  config: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]] = None,
  id: str = None,
  identifier: str = None,
  interval: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.interval">interval</a></code> | <code>str</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#account_id DevicePostureIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.name"></a>

- *Type:* str

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#name DevicePostureIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.type"></a>

- *Type:* str

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#type DevicePostureIntegration#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#config DevicePostureIntegration#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.interval"></a>

- *Type:* str

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#interval DevicePostureIntegration#interval}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval">reset_interval</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig"></a>

```python
def put_config(
  value: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval"></a>

```python
def reset_interval() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config"></a>

```python
config: DevicePostureIntegrationConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureIntegrationConfig <a name="DevicePostureIntegrationConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  type: str,
  config: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]] = None,
  id: str = None,
  identifier: str = None,
  interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name">name</a></code> | <code>str</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type">type</a></code> | <code>str</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval">interval</a></code> | <code>str</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#account_id DevicePostureIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#name DevicePostureIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#type DevicePostureIntegration#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config"></a>

```python
config: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#config DevicePostureIntegration#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#id DevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval"></a>

```python
interval: str
```

- *Type:* str

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#interval DevicePostureIntegration#interval}

---

### DevicePostureIntegrationConfigA <a name="DevicePostureIntegrationConfigA" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegrationConfigA(
  api_url: str = None,
  auth_url: str = None,
  client_id: str = None,
  client_key: str = None,
  client_secret: str = None,
  customer_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl">api_url</a></code> | <code>str</code> | The third-party API's URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl">auth_url</a></code> | <code>str</code> | The third-party authorization API URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId">client_id</a></code> | <code>str</code> | The client identifier for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey">client_key</a></code> | <code>str</code> | The client key for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId">customer_id</a></code> | <code>str</code> | The customer identifier for authenticating API calls. |

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

The third-party API's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#api_url DevicePostureIntegration#api_url}

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

The third-party authorization API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#auth_url DevicePostureIntegration#auth_url}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#client_id DevicePostureIntegration#client_id}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

The client key for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#client_key DevicePostureIntegration#client_key}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#client_secret DevicePostureIntegration#client_secret}

---

##### `customer_id`<sup>Optional</sup> <a name="customer_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

The customer identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/device_posture_integration#customer_id DevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureIntegrationConfigAList <a name="DevicePostureIntegrationConfigAList" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegrationConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevicePostureIntegrationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevicePostureIntegrationConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]]

---


### DevicePostureIntegrationConfigAOutputReference <a name="DevicePostureIntegrationConfigAOutputReference" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import device_posture_integration

devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl">reset_auth_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId">reset_customer_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_url` <a name="reset_api_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_auth_url` <a name="reset_auth_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```python
def reset_auth_url() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_customer_id` <a name="reset_customer_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```python
def reset_customer_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput">customer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId">customer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `customer_id_input`<sup>Optional</sup> <a name="customer_id_input" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```python
customer_id_input: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `customer_id`<sup>Required</sup> <a name="customer_id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```python
customer_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevicePostureIntegrationConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA">DevicePostureIntegrationConfigA</a>]

---



