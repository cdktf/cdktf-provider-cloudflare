# `dnsZoneTransfersPeer` Submodule <a name="`dnsZoneTransfersPeer` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersPeer <a name="DnsZoneTransfersPeer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeer(
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
  ip: str = None,
  ixfr_enable: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  tsig_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the peer. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.ip">ip</a></code> | <code>str</code> | IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.ixfrEnable">ixfr_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.tsigId">tsig_id</a></code> | <code>str</code> | TSIG authentication will be used for zone transfer if configured. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.name"></a>

- *Type:* str

The name of the peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.ip"></a>

- *Type:* str

IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to.

For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}

---

##### `ixfr_enable`<sup>Optional</sup> <a name="ixfr_enable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.ixfrEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}

---

##### `tsig_id`<sup>Optional</sup> <a name="tsig_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.tsigId"></a>

- *Type:* str

TSIG authentication will be used for zone transfer if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable">reset_ixfr_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId">reset_tsig_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ixfr_enable` <a name="reset_ixfr_enable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable"></a>

```python
def reset_ixfr_enable() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_tsig_id` <a name="reset_tsig_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId"></a>

```python
def reset_tsig_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsZoneTransfersPeer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsZoneTransfersPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput">ixfr_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput">tsig_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable">ixfr_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId">tsig_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `ixfr_enable_input`<sup>Optional</sup> <a name="ixfr_enable_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput"></a>

```python
ixfr_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tsig_id_input`<sup>Optional</sup> <a name="tsig_id_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput"></a>

```python
tsig_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `ixfr_enable`<sup>Required</sup> <a name="ixfr_enable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable"></a>

```python
ixfr_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tsig_id`<sup>Required</sup> <a name="tsig_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId"></a>

```python
tsig_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersPeerConfig <a name="DnsZoneTransfersPeerConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_peer

dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  ip: str = None,
  ixfr_enable: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  tsig_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name">name</a></code> | <code>str</code> | The name of the peer. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip">ip</a></code> | <code>str</code> | IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable">ixfr_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId">tsig_id</a></code> | <code>str</code> | TSIG authentication will be used for zone transfer if configured. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip"></a>

```python
ip: str
```

- *Type:* str

IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to.

For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}

---

##### `ixfr_enable`<sup>Optional</sup> <a name="ixfr_enable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable"></a>

```python
ixfr_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}

---

##### `tsig_id`<sup>Optional</sup> <a name="tsig_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId"></a>

```python
tsig_id: str
```

- *Type:* str

TSIG authentication will be used for zone transfer if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}

---



