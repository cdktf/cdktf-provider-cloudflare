# `zeroTrustAccessInfrastructureTarget` Submodule <a name="`zeroTrustAccessInfrastructureTarget` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessInfrastructureTarget <a name="ZeroTrustAccessInfrastructureTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget(
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
  hostname: str,
  ip: ZeroTrustAccessInfrastructureTargetIp
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.hostname"></a>

- *Type:* str

A non-unique field that refers to a target.

Case insensitive, maximum
length of 255 characters, supports the use of special characters dash
and period, does not support spaces, and must start and end with an
alphanumeric character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.ip"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp">put_ip</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip` <a name="put_ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp"></a>

```python
def put_ip(
  ipv4: ZeroTrustAccessInfrastructureTargetIpIpv4 = None,
  ipv6: ZeroTrustAccessInfrastructureTargetIpIpv6 = None
) -> None
```

###### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp.parameter.ipv4"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}

---

###### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput">ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip"></a>

```python
ip: ZeroTrustAccessInfrastructureTargetIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput"></a>

```python
ip_input: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessInfrastructureTargetConfig <a name="ZeroTrustAccessInfrastructureTargetConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  hostname: str,
  ip: ZeroTrustAccessInfrastructureTargetIp
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname">hostname</a></code> | <code>str</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

A non-unique field that refers to a target.

Case insensitive, maximum
length of 255 characters, supports the use of special characters dash
and period, does not support spaces, and must start and end with an
alphanumeric character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip"></a>

```python
ip: ZeroTrustAccessInfrastructureTargetIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}

---

### ZeroTrustAccessInfrastructureTargetIp <a name="ZeroTrustAccessInfrastructureTargetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp(
  ipv4: ZeroTrustAccessInfrastructureTargetIpIpv4 = None,
  ipv6: ZeroTrustAccessInfrastructureTargetIpIpv6 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4"></a>

```python
ipv4: ZeroTrustAccessInfrastructureTargetIpIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6"></a>

```python
ipv6: ZeroTrustAccessInfrastructureTargetIpIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}

---

### ZeroTrustAccessInfrastructureTargetIpIpv4 <a name="ZeroTrustAccessInfrastructureTargetIpIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4(
  ip_addr: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr">ip_addr</a></code> | <code>str</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `ip_addr`<sup>Optional</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

### ZeroTrustAccessInfrastructureTargetIpIpv6 <a name="ZeroTrustAccessInfrastructureTargetIpIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6(
  ip_addr: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr">ip_addr</a></code> | <code>str</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `ip_addr`<sup>Optional</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr">reset_ip_addr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_addr` <a name="reset_ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr"></a>

```python
def reset_ip_addr() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput">ip_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr">ip_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addr_input`<sup>Optional</sup> <a name="ip_addr_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```python
ip_addr_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIpIpv4]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>]

---


### ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr">reset_ip_addr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_addr` <a name="reset_ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr"></a>

```python
def reset_ip_addr() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput">ip_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr">ip_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addr_input`<sup>Optional</sup> <a name="ip_addr_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```python
ip_addr_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIpIpv6]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>]

---


### ZeroTrustAccessInfrastructureTargetIpOutputReference <a name="ZeroTrustAccessInfrastructureTargetIpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_infrastructure_target

zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4">put_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6">put_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ipv4` <a name="put_ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4"></a>

```python
def put_ipv4(
  ip_addr: str = None,
  virtual_network_id: str = None
) -> None
```

###### `ip_addr`<sup>Optional</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4.parameter.ipAddr"></a>

- *Type:* str

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4.parameter.virtualNetworkId"></a>

- *Type:* str

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

##### `put_ipv6` <a name="put_ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6"></a>

```python
def put_ipv6(
  ip_addr: str = None,
  virtual_network_id: str = None
) -> None
```

###### `ip_addr`<sup>Optional</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6.parameter.ipAddr"></a>

- *Type:* str

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6.parameter.virtualNetworkId"></a>

- *Type:* str

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4"></a>

```python
ipv4: ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6"></a>

```python
ipv6: ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a>

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input"></a>

```python
ipv4_input: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIpIpv4]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>]

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input"></a>

```python
ipv6_input: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIpIpv6]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessInfrastructureTargetIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>]

---



