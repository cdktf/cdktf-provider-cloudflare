# `dnsZoneTransfersIncoming` Submodule <a name="`dnsZoneTransfersIncoming` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersIncoming <a name="DnsZoneTransfersIncoming" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncoming(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_refresh_seconds: typing.Union[int, float],
  name: str,
  peers: typing.List[str],
  zone_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.autoRefreshSeconds">auto_refresh_seconds</a></code> | <code>typing.Union[int, float]</code> | How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.name">name</a></code> | <code>str</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.peers">peers</a></code> | <code>typing.List[str]</code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_refresh_seconds`<sup>Required</sup> <a name="auto_refresh_seconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.autoRefreshSeconds"></a>

- *Type:* typing.Union[int, float]

How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.name"></a>

- *Type:* str

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.peers"></a>

- *Type:* typing.List[str]

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsZoneTransfersIncoming to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsZoneTransfersIncoming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime">checked_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime">modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial">soa_serial</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput">auto_refresh_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput">peers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds">auto_refresh_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers">peers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `checked_time`<sup>Required</sup> <a name="checked_time" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime"></a>

```python
checked_time: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_time`<sup>Required</sup> <a name="modified_time" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime"></a>

```python
modified_time: str
```

- *Type:* str

---

##### `soa_serial`<sup>Required</sup> <a name="soa_serial" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial"></a>

```python
soa_serial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_seconds_input`<sup>Optional</sup> <a name="auto_refresh_seconds_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput"></a>

```python
auto_refresh_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peers_input`<sup>Optional</sup> <a name="peers_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput"></a>

```python
peers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `auto_refresh_seconds`<sup>Required</sup> <a name="auto_refresh_seconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds"></a>

```python
auto_refresh_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers"></a>

```python
peers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersIncomingConfig <a name="DnsZoneTransfersIncomingConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_zone_transfers_incoming

dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_refresh_seconds: typing.Union[int, float],
  name: str,
  peers: typing.List[str],
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds">auto_refresh_seconds</a></code> | <code>typing.Union[int, float]</code> | How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name">name</a></code> | <code>str</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers">peers</a></code> | <code>typing.List[str]</code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_refresh_seconds`<sup>Required</sup> <a name="auto_refresh_seconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds"></a>

```python
auto_refresh_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers"></a>

```python
peers: typing.List[str]
```

- *Type:* typing.List[str]

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}.

---



