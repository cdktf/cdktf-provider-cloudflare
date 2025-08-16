# `zeroTrustDeviceManagedNetworks` Submodule <a name="`zeroTrustDeviceManagedNetworks` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceManagedNetworks <a name="ZeroTrustDeviceManagedNetworks" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks(
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
  config: ZeroTrustDeviceManagedNetworksConfigA,
  name: str,
  type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | The configuration object containing information for the WARP client to detect the managed network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the device managed network. This name must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of device managed network. Available values: "tls". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

The configuration object containing information for the WARP client to detect the managed network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#config ZeroTrustDeviceManagedNetworks#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.name"></a>

- *Type:* str

The name of the device managed network. This name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#name ZeroTrustDeviceManagedNetworks#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.type"></a>

- *Type:* str

The type of device managed network. Available values: "tls".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#type ZeroTrustDeviceManagedNetworks#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig">put_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig"></a>

```python
def put_config(
  tls_sockaddr: str,
  sha256: str = None
) -> None
```

###### `tls_sockaddr`<sup>Required</sup> <a name="tls_sockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig.parameter.tlsSockaddr"></a>

- *Type:* str

A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#tls_sockaddr ZeroTrustDeviceManagedNetworks#tls_sockaddr}

---

###### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig.parameter.sha256"></a>

- *Type:* str

The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr.

If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#sha256 ZeroTrustDeviceManagedNetworks#sha256}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDeviceManagedNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config"></a>

```python
config: ZeroTrustDeviceManagedNetworksConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, ZeroTrustDeviceManagedNetworksConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceManagedNetworksConfig <a name="ZeroTrustDeviceManagedNetworksConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  config: ZeroTrustDeviceManagedNetworksConfigA,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | The configuration object containing information for the WARP client to detect the managed network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name">name</a></code> | <code>str</code> | The name of the device managed network. This name must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type">type</a></code> | <code>str</code> | The type of device managed network. Available values: "tls". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config"></a>

```python
config: ZeroTrustDeviceManagedNetworksConfigA
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

The configuration object containing information for the WARP client to detect the managed network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#config ZeroTrustDeviceManagedNetworks#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the device managed network. This name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#name ZeroTrustDeviceManagedNetworks#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of device managed network. Available values: "tls".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#type ZeroTrustDeviceManagedNetworks#type}

---

### ZeroTrustDeviceManagedNetworksConfigA <a name="ZeroTrustDeviceManagedNetworksConfigA" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA(
  tls_sockaddr: str,
  sha256: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr">tls_sockaddr</a></code> | <code>str</code> | A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256">sha256</a></code> | <code>str</code> | The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. |

---

##### `tls_sockaddr`<sup>Required</sup> <a name="tls_sockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr"></a>

```python
tls_sockaddr: str
```

- *Type:* str

A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#tls_sockaddr ZeroTrustDeviceManagedNetworks#tls_sockaddr}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr.

If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_managed_networks#sha256 ZeroTrustDeviceManagedNetworks#sha256}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceManagedNetworksConfigAOutputReference <a name="ZeroTrustDeviceManagedNetworksConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_managed_networks

zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256">reset_sha256</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha256` <a name="reset_sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256"></a>

```python
def reset_sha256() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input">sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput">tls_sockaddr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr">tls_sockaddr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256_input`<sup>Optional</sup> <a name="sha256_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input"></a>

```python
sha256_input: str
```

- *Type:* str

---

##### `tls_sockaddr_input`<sup>Optional</sup> <a name="tls_sockaddr_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput"></a>

```python
tls_sockaddr_input: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `tls_sockaddr`<sup>Required</sup> <a name="tls_sockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr"></a>

```python
tls_sockaddr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustDeviceManagedNetworksConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>]

---



