# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel(
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
  cloudflare_endpoint: str,
  interface_address: str,
  name: str,
  customer_endpoint: str = None,
  description: str = None,
  health_check: MagicWanIpsecTunnelHealthCheck = None,
  ipsec_tunnel_id: str = None,
  psk: str = None,
  replay_protection: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.psk">psk</a></code> | <code>str</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.replayProtection">replay_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.cloudflareEndpoint"></a>

- *Type:* str

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.name"></a>

- *Type:* str

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customerEndpoint"></a>

- *Type:* str

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `ipsec_tunnel_id`<sup>Optional</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#ipsec_tunnel_id MagicWanIpsecTunnel#ipsec_tunnel_id}

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.psk"></a>

- *Type:* str

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `replay_protection`<sup>Optional</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.replayProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint">reset_customer_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetIpsecTunnelId">reset_ipsec_tunnel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">reset_psk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">reset_replay_protection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck"></a>

```python
def put_health_check(
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rate: str = None,
  target: MagicWanIpsecTunnelHealthCheckTarget = None,
  type: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.direction"></a>

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

###### `rate`<sup>Optional</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.rate"></a>

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.type"></a>

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

##### `reset_customer_endpoint` <a name="reset_customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint"></a>

```python
def reset_customer_endpoint() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_ipsec_tunnel_id` <a name="reset_ipsec_tunnel_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetIpsecTunnelId"></a>

```python
def reset_ipsec_tunnel_id() -> None
```

##### `reset_psk` <a name="reset_psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```python
def reset_psk() -> None
```

##### `reset_replay_protection` <a name="reset_replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```python
def reset_replay_protection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnel">ipsec_tunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference">MagicWanIpsecTunnelIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnels">ipsec_tunnels</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList">MagicWanIpsecTunnelIpsecTunnelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modified">modified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedIpsecTunnel">modified_ipsec_tunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">cloudflare_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">customer_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput">health_check_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">interface_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelIdInput">ipsec_tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">replay_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">replay_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a>

---

##### `ipsec_tunnel`<sup>Required</sup> <a name="ipsec_tunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnel"></a>

```python
ipsec_tunnel: MagicWanIpsecTunnelIpsecTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference">MagicWanIpsecTunnelIpsecTunnelOutputReference</a>

---

##### `ipsec_tunnels`<sup>Required</sup> <a name="ipsec_tunnels" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnels"></a>

```python
ipsec_tunnels: MagicWanIpsecTunnelIpsecTunnelsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList">MagicWanIpsecTunnelIpsecTunnelsList</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modified"></a>

```python
modified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `modified_ipsec_tunnel`<sup>Required</sup> <a name="modified_ipsec_tunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedIpsecTunnel"></a>

```python
modified_ipsec_tunnel: MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `cloudflare_endpoint_input`<sup>Optional</sup> <a name="cloudflare_endpoint_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```python
cloudflare_endpoint_input: str
```

- *Type:* str

---

##### `customer_endpoint_input`<sup>Optional</sup> <a name="customer_endpoint_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```python
customer_endpoint_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput"></a>

```python
health_check_input: typing.Union[IResolvable, MagicWanIpsecTunnelHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>]

---

##### `interface_address_input`<sup>Optional</sup> <a name="interface_address_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```python
interface_address_input: str
```

- *Type:* str

---

##### `ipsec_tunnel_id_input`<sup>Optional</sup> <a name="ipsec_tunnel_id_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelIdInput"></a>

```python
ipsec_tunnel_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `replay_protection_input`<sup>Optional</sup> <a name="replay_protection_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```python
replay_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `ipsec_tunnel_id`<sup>Required</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelId"></a>

```python
ipsec_tunnel_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```python
replay_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  cloudflare_endpoint: str,
  interface_address: str,
  name: str,
  customer_endpoint: str = None,
  description: str = None,
  health_check: MagicWanIpsecTunnelHealthCheck = None,
  ipsec_tunnel_id: str = None,
  psk: str = None,
  replay_protection: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">name</a></code> | <code>str</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">psk</a></code> | <code>str</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">replay_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `ipsec_tunnel_id`<sup>Optional</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.ipsecTunnelId"></a>

```python
ipsec_tunnel_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#ipsec_tunnel_id MagicWanIpsecTunnel#ipsec_tunnel_id}

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```python
psk: str
```

- *Type:* str

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `replay_protection`<sup>Optional</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```python
replay_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

### MagicWanIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck(
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rate: str = None,
  target: MagicWanIpsecTunnelHealthCheckTarget = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction">direction</a></code> | <code>str</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate">rate</a></code> | <code>str</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type">type</a></code> | <code>str</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate"></a>

```python
rate: str
```

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target"></a>

```python
target: MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

### MagicWanIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget(
  saved: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>str</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved"></a>

```python
saved: str
```

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

### MagicWanIpsecTunnelIpsecTunnel <a name="MagicWanIpsecTunnelIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel()
```


### MagicWanIpsecTunnelIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck()
```


### MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget()
```


### MagicWanIpsecTunnelIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata()
```


### MagicWanIpsecTunnelIpsecTunnels <a name="MagicWanIpsecTunnelIpsecTunnels" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels()
```


### MagicWanIpsecTunnelIpsecTunnelsHealthCheck <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck()
```


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget()
```


### MagicWanIpsecTunnelIpsecTunnelsPskMetadata <a name="MagicWanIpsecTunnelIpsecTunnelsPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata()
```


### MagicWanIpsecTunnelModifiedIpsecTunnel <a name="MagicWanIpsecTunnelModifiedIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel()
```


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck()
```


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget()
```


### MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate">reset_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget"></a>

```python
def put_target(
  saved: str = None
) -> None
```

###### `saved`<sup>Optional</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget.parameter.saved"></a>

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput">rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput"></a>

```python
rate_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, MagicWanIpsecTunnelHealthCheckTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanIpsecTunnelHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>]

---


### MagicWanIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved">reset_saved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_saved` <a name="reset_saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```python
def reset_saved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput">saved_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved_input`<sup>Optional</sup> <a name="saved_input" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```python
saved_input: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanIpsecTunnelHealthCheckTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>]

---


### MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck">MagicWanIpsecTunnelIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck">MagicWanIpsecTunnelIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelIpsecTunnelOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher">allow_null_cipher</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata">psk_metadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection">replay_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel">MagicWanIpsecTunnelIpsecTunnel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher"></a>

```python
allow_null_cipher: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk_metadata`<sup>Required</sup> <a name="psk_metadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata"></a>

```python
psk_metadata: MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a>

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection"></a>

```python
replay_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel">MagicWanIpsecTunnelIpsecTunnel</a>

---


### MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">last_generated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata">MagicWanIpsecTunnelIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_generated_on`<sup>Required</sup> <a name="last_generated_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```python
last_generated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata">MagicWanIpsecTunnelIpsecTunnelPskMetadata</a>

---


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck">MagicWanIpsecTunnelIpsecTunnelsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck">MagicWanIpsecTunnelIpsecTunnelsHealthCheck</a>

---


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget</a>

---


### MagicWanIpsecTunnelIpsecTunnelsList <a name="MagicWanIpsecTunnelIpsecTunnelsList" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MagicWanIpsecTunnelIpsecTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MagicWanIpsecTunnelIpsecTunnelsOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.allowNullCipher">allow_null_cipher</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.pskMetadata">psk_metadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.replayProtection">replay_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels">MagicWanIpsecTunnelIpsecTunnels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.allowNullCipher"></a>

```python
allow_null_cipher: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk_metadata`<sup>Required</sup> <a name="psk_metadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.pskMetadata"></a>

```python
psk_metadata: MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference</a>

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.replayProtection"></a>

```python
replay_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnels
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels">MagicWanIpsecTunnelIpsecTunnels</a>

---


### MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.lastGeneratedOn">last_generated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata">MagicWanIpsecTunnelIpsecTunnelsPskMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_generated_on`<sup>Required</sup> <a name="last_generated_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.lastGeneratedOn"></a>

```python
last_generated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelIpsecTunnelsPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata">MagicWanIpsecTunnelIpsecTunnelsPskMetadata</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.allowNullCipher">allow_null_cipher</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.pskMetadata">psk_metadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.replayProtection">replay_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel">MagicWanIpsecTunnelModifiedIpsecTunnel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.allowNullCipher"></a>

```python
allow_null_cipher: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk_metadata`<sup>Required</sup> <a name="psk_metadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.pskMetadata"></a>

```python
psk_metadata: MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference</a>

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.replayProtection"></a>

```python
replay_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelModifiedIpsecTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel">MagicWanIpsecTunnelModifiedIpsecTunnel</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">last_generated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_generated_on`<sup>Required</sup> <a name="last_generated_on" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```python
last_generated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata</a>

---



