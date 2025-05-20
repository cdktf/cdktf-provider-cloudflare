# `zeroTrustTunnelCloudflared` Submodule <a name="`zeroTrustTunnelCloudflared` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelCloudflared <a name="ZeroTrustTunnelCloudflared" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared(
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
  config_src: str = None,
  tunnel_secret: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.configSrc">config_src</a></code> | <code>str</code> | Indicates if this is a locally or remotely configured tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.tunnelSecret">tunnel_secret</a></code> | <code>str</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#account_id ZeroTrustTunnelCloudflared#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.name"></a>

- *Type:* str

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#name ZeroTrustTunnelCloudflared#name}

---

##### `config_src`<sup>Optional</sup> <a name="config_src" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.configSrc"></a>

- *Type:* str

Indicates if this is a locally or remotely configured tunnel.

If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.
Available values: "local", "cloudflare".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#config_src ZeroTrustTunnelCloudflared#config_src}

---

##### `tunnel_secret`<sup>Optional</sup> <a name="tunnel_secret" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.Initializer.parameter.tunnelSecret"></a>

- *Type:* str

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#tunnel_secret ZeroTrustTunnelCloudflared#tunnel_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetConfigSrc">reset_config_src</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetTunnelSecret">reset_tunnel_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_config_src` <a name="reset_config_src" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetConfigSrc"></a>

```python
def reset_config_src() -> None
```

##### `reset_tunnel_secret` <a name="reset_tunnel_secret" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.resetTunnelSecret"></a>

```python
def reset_tunnel_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustTunnelCloudflared to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustTunnelCloudflared that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelCloudflared to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList">ZeroTrustTunnelCloudflaredConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connsActiveAt">conns_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connsInactiveAt">conns_inactive_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.remoteConfig">remote_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunType">tun_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.configSrcInput">config_src_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunnelSecretInput">tunnel_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.configSrc">config_src</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunnelSecret">tunnel_secret</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connections"></a>

```python
connections: ZeroTrustTunnelCloudflaredConnectionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList">ZeroTrustTunnelCloudflaredConnectionsList</a>

---

##### `conns_active_at`<sup>Required</sup> <a name="conns_active_at" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connsActiveAt"></a>

```python
conns_active_at: str
```

- *Type:* str

---

##### `conns_inactive_at`<sup>Required</sup> <a name="conns_inactive_at" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.connsInactiveAt"></a>

```python
conns_inactive_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `remote_config`<sup>Required</sup> <a name="remote_config" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.remoteConfig"></a>

```python
remote_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tun_type`<sup>Required</sup> <a name="tun_type" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunType"></a>

```python
tun_type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_src_input`<sup>Optional</sup> <a name="config_src_input" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.configSrcInput"></a>

```python
config_src_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tunnel_secret_input`<sup>Optional</sup> <a name="tunnel_secret_input" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunnelSecretInput"></a>

```python
tunnel_secret_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `config_src`<sup>Required</sup> <a name="config_src" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.configSrc"></a>

```python
config_src: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tunnel_secret`<sup>Required</sup> <a name="tunnel_secret" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tunnelSecret"></a>

```python
tunnel_secret: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflared.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelCloudflaredConfig <a name="ZeroTrustTunnelCloudflaredConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  config_src: str = None,
  tunnel_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.name">name</a></code> | <code>str</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.configSrc">config_src</a></code> | <code>str</code> | Indicates if this is a locally or remotely configured tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.tunnelSecret">tunnel_secret</a></code> | <code>str</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#account_id ZeroTrustTunnelCloudflared#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#name ZeroTrustTunnelCloudflared#name}

---

##### `config_src`<sup>Optional</sup> <a name="config_src" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.configSrc"></a>

```python
config_src: str
```

- *Type:* str

Indicates if this is a locally or remotely configured tunnel.

If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.
Available values: "local", "cloudflare".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#config_src ZeroTrustTunnelCloudflared#config_src}

---

##### `tunnel_secret`<sup>Optional</sup> <a name="tunnel_secret" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConfig.property.tunnelSecret"></a>

```python
tunnel_secret: str
```

- *Type:* str

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_tunnel_cloudflared#tunnel_secret ZeroTrustTunnelCloudflared#tunnel_secret}

---

### ZeroTrustTunnelCloudflaredConnections <a name="ZeroTrustTunnelCloudflaredConnections" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelCloudflaredConnectionsList <a name="ZeroTrustTunnelCloudflaredConnectionsList" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustTunnelCloudflaredConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ZeroTrustTunnelCloudflaredConnectionsOutputReference <a name="ZeroTrustTunnelCloudflaredConnectionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_tunnel_cloudflared

zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName">colo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect">is_pending_reconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt">opened_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp">origin_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnections">ZeroTrustTunnelCloudflaredConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `colo_name`<sup>Required</sup> <a name="colo_name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.coloName"></a>

```python
colo_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pending_reconnect`<sup>Required</sup> <a name="is_pending_reconnect" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.isPendingReconnect"></a>

```python
is_pending_reconnect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.openedAt"></a>

```python
opened_at: str
```

- *Type:* str

---

##### `origin_ip`<sup>Required</sup> <a name="origin_ip" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.originIp"></a>

```python
origin_ip: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustTunnelCloudflaredConnections
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflared.ZeroTrustTunnelCloudflaredConnections">ZeroTrustTunnelCloudflaredConnections</a>

---



