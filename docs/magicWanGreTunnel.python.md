# `magicWanGreTunnel` Submodule <a name="`magicWanGreTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanGreTunnel <a name="MagicWanGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnel(
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
  cloudflare_gre_endpoint: str,
  customer_gre_endpoint: str,
  interface_address: str,
  name: str,
  description: str = None,
  health_check: MagicWanGreTunnelHealthCheck = None,
  mtu: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.cloudflareGreEndpoint">cloudflare_gre_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.customerGreEndpoint">customer_gre_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `cloudflare_gre_endpoint`<sup>Required</sup> <a name="cloudflare_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.cloudflareGreEndpoint"></a>

- *Type:* str

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `customer_gre_endpoint`<sup>Required</sup> <a name="customer_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.customerGreEndpoint"></a>

- *Type:* str

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.name"></a>

- *Type:* str

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck"></a>

```python
def put_health_check(
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rate: str = None,
  target: MagicWanGreTunnelHealthCheckTarget = None,
  type: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.direction"></a>

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}

---

###### `rate`<sup>Optional</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.rate"></a>

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.type"></a>

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicWanGreTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicWanGreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanGreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput">cloudflare_gre_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput">customer_gre_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput">health_check_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput">interface_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint">cloudflare_gre_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint">customer_gre_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck"></a>

```python
health_check: MagicWanGreTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `cloudflare_gre_endpoint_input`<sup>Optional</sup> <a name="cloudflare_gre_endpoint_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput"></a>

```python
cloudflare_gre_endpoint_input: str
```

- *Type:* str

---

##### `customer_gre_endpoint_input`<sup>Optional</sup> <a name="customer_gre_endpoint_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput"></a>

```python
customer_gre_endpoint_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput"></a>

```python
health_check_input: typing.Union[IResolvable, MagicWanGreTunnelHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>]

---

##### `interface_address_input`<sup>Optional</sup> <a name="interface_address_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput"></a>

```python
interface_address_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `cloudflare_gre_endpoint`<sup>Required</sup> <a name="cloudflare_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint"></a>

```python
cloudflare_gre_endpoint: str
```

- *Type:* str

---

##### `customer_gre_endpoint`<sup>Required</sup> <a name="customer_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint"></a>

```python
customer_gre_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanGreTunnelConfig <a name="MagicWanGreTunnelConfig" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  cloudflare_gre_endpoint: str,
  customer_gre_endpoint: str,
  interface_address: str,
  name: str,
  description: str = None,
  health_check: MagicWanGreTunnelHealthCheck = None,
  mtu: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint">cloudflare_gre_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint">customer_gre_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name">name</a></code> | <code>str</code> | The name of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `cloudflare_gre_endpoint`<sup>Required</sup> <a name="cloudflare_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint"></a>

```python
cloudflare_gre_endpoint: str
```

- *Type:* str

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `customer_gre_endpoint`<sup>Required</sup> <a name="customer_gre_endpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint"></a>

```python
customer_gre_endpoint: str
```

- *Type:* str

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck"></a>

```python
health_check: MagicWanGreTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

### MagicWanGreTunnelHealthCheck <a name="MagicWanGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnelHealthCheck(
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rate: str = None,
  target: MagicWanGreTunnelHealthCheckTarget = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction">direction</a></code> | <code>str</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate">rate</a></code> | <code>str</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type">type</a></code> | <code>str</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate"></a>

```python
rate: str
```

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target"></a>

```python
target: MagicWanGreTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}

---

### MagicWanGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget(
  saved: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>str</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved"></a>

```python
saved: str
```

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate">reset_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget"></a>

```python
def put_target(
  saved: str = None
) -> None
```

###### `saved`<sup>Optional</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget.parameter.saved"></a>

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput">rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanGreTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput"></a>

```python
rate_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, MagicWanGreTunnelHealthCheckTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanGreTunnelHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>]

---


### MagicWanGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_gre_tunnel

magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved">reset_saved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_saved` <a name="reset_saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```python
def reset_saved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput">saved_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved_input`<sup>Optional</sup> <a name="saved_input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```python
saved_input: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanGreTunnelHealthCheckTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>]

---



