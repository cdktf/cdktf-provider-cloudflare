# `dnsSettings` Submodule <a name="`dnsSettings` Submodule" id="@cdktf/provider-cloudflare.dnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSettings <a name="DnsSettings" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  zone_defaults: DnsSettingsZoneDefaults = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `zone_defaults`<sup>Optional</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneDefaults"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults">put_zone_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults">reset_zone_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_zone_defaults` <a name="put_zone_defaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults"></a>

```python
def put_zone_defaults(
  flatten_all_cnames: typing.Union[bool, IResolvable] = None,
  foundation_dns: typing.Union[bool, IResolvable] = None,
  internal_dns: DnsSettingsZoneDefaultsInternalDns = None,
  multi_provider: typing.Union[bool, IResolvable] = None,
  nameservers: DnsSettingsZoneDefaultsNameservers = None,
  ns_ttl: typing.Union[int, float] = None,
  secondary_overrides: typing.Union[bool, IResolvable] = None,
  soa: DnsSettingsZoneDefaultsSoa = None,
  zone_mode: str = None
) -> None
```

###### `flatten_all_cnames`<sup>Optional</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.flattenAllCnames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}

---

###### `foundation_dns`<sup>Optional</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.foundationDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}

---

###### `internal_dns`<sup>Optional</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.internalDns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}

---

###### `multi_provider`<sup>Optional</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.multiProvider"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}

---

###### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.nameservers"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}

---

###### `ns_ttl`<sup>Optional</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.nsTtl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}

---

###### `secondary_overrides`<sup>Optional</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.secondaryOverrides"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}

---

###### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.soa"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}

---

###### `zone_mode`<sup>Optional</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.zoneMode"></a>

- *Type:* str

Whether the zone mode is a regular or CDN/DNS only zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_zone_defaults` <a name="reset_zone_defaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults"></a>

```python
def reset_zone_defaults() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput">zone_defaults_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_defaults`<sup>Required</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults"></a>

```python
zone_defaults: DnsSettingsZoneDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `zone_defaults_input`<sup>Optional</sup> <a name="zone_defaults_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput"></a>

```python
zone_defaults_input: typing.Union[IResolvable, DnsSettingsZoneDefaults]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSettingsConfig <a name="DnsSettingsConfig" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str = None,
  zone_defaults: DnsSettingsZoneDefaults = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `zone_defaults`<sup>Optional</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults"></a>

```python
zone_defaults: DnsSettingsZoneDefaults
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

### DnsSettingsZoneDefaults <a name="DnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaults(
  flatten_all_cnames: typing.Union[bool, IResolvable] = None,
  foundation_dns: typing.Union[bool, IResolvable] = None,
  internal_dns: DnsSettingsZoneDefaultsInternalDns = None,
  multi_provider: typing.Union[bool, IResolvable] = None,
  nameservers: DnsSettingsZoneDefaultsNameservers = None,
  ns_ttl: typing.Union[int, float] = None,
  secondary_overrides: typing.Union[bool, IResolvable] = None,
  soa: DnsSettingsZoneDefaultsSoa = None,
  zone_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames">flatten_all_cnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns">foundation_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns">internal_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider">multi_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl">ns_ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides">secondary_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode">zone_mode</a></code> | <code>str</code> | Whether the zone mode is a regular or CDN/DNS only zone. |

---

##### `flatten_all_cnames`<sup>Optional</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```python
flatten_all_cnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}

---

##### `foundation_dns`<sup>Optional</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns"></a>

```python
foundation_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}

---

##### `internal_dns`<sup>Optional</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns"></a>

```python
internal_dns: DnsSettingsZoneDefaultsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}

---

##### `multi_provider`<sup>Optional</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider"></a>

```python
multi_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers"></a>

```python
nameservers: DnsSettingsZoneDefaultsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}

---

##### `ns_ttl`<sup>Optional</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl"></a>

```python
ns_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}

---

##### `secondary_overrides`<sup>Optional</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```python
secondary_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa"></a>

```python
soa: DnsSettingsZoneDefaultsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}

---

##### `zone_mode`<sup>Optional</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode"></a>

```python
zone_mode: str
```

- *Type:* str

Whether the zone mode is a regular or CDN/DNS only zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}

---

### DnsSettingsZoneDefaultsInternalDns <a name="DnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsInternalDns(
  reference_zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">reference_zone_id</a></code> | <code>str</code> | The ID of the zone to fallback to. |

---

##### `reference_zone_id`<sup>Optional</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```python
reference_zone_id: str
```

- *Type:* str

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}

---

### DnsSettingsZoneDefaultsNameservers <a name="DnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsNameservers(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type">type</a></code> | <code>str</code> | Nameserver type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type"></a>

```python
type: str
```

- *Type:* str

Nameserver type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}

---

### DnsSettingsZoneDefaultsSoa <a name="DnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsSoa(
  expire: typing.Union[int, float],
  min_ttl: typing.Union[int, float],
  mname: str,
  refresh: typing.Union[int, float],
  retry: typing.Union[int, float],
  rname: str,
  ttl: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname">mname</a></code> | <code>str</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh">refresh</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry">retry</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname">rname</a></code> | <code>str</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname"></a>

```python
mname: str
```

- *Type:* str

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh"></a>

```python
refresh: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry"></a>

```python
retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname"></a>

```python
rname: str
```

- *Type:* str

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">reset_reference_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reference_zone_id` <a name="reset_reference_zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```python
def reset_reference_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">reference_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">reference_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_zone_id_input`<sup>Optional</sup> <a name="reference_zone_id_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```python
reference_zone_id_input: str
```

- *Type:* str

---

##### `reference_zone_id`<sup>Required</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```python
reference_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSettingsZoneDefaultsInternalDns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>]

---


### DnsSettingsZoneDefaultsNameserversOutputReference <a name="DnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSettingsZoneDefaultsNameservers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>]

---


### DnsSettingsZoneDefaultsOutputReference <a name="DnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns">put_internal_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers">put_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa">put_soa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">reset_flatten_all_cnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns">reset_foundation_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns">reset_internal_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider">reset_multi_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers">reset_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl">reset_ns_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">reset_secondary_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa">reset_soa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode">reset_zone_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_dns` <a name="put_internal_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```python
def put_internal_dns(
  reference_zone_id: str = None
) -> None
```

###### `reference_zone_id`<sup>Optional</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.referenceZoneId"></a>

- *Type:* str

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}

---

##### `put_nameservers` <a name="put_nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```python
def put_nameservers(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.type"></a>

- *Type:* str

Nameserver type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}

---

##### `put_soa` <a name="put_soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```python
def put_soa(
  expire: typing.Union[int, float],
  min_ttl: typing.Union[int, float],
  mname: str,
  refresh: typing.Union[int, float],
  retry: typing.Union[int, float],
  rname: str,
  ttl: typing.Union[int, float]
) -> None
```

###### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.expire"></a>

- *Type:* typing.Union[int, float]

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}

---

###### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.minTtl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}

---

###### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.mname"></a>

- *Type:* str

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}

---

###### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.refresh"></a>

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}

---

###### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.retry"></a>

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}

---

###### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.rname"></a>

- *Type:* str

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}

---

###### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}

---

##### `reset_flatten_all_cnames` <a name="reset_flatten_all_cnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```python
def reset_flatten_all_cnames() -> None
```

##### `reset_foundation_dns` <a name="reset_foundation_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```python
def reset_foundation_dns() -> None
```

##### `reset_internal_dns` <a name="reset_internal_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```python
def reset_internal_dns() -> None
```

##### `reset_multi_provider` <a name="reset_multi_provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```python
def reset_multi_provider() -> None
```

##### `reset_nameservers` <a name="reset_nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```python
def reset_nameservers() -> None
```

##### `reset_ns_ttl` <a name="reset_ns_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```python
def reset_ns_ttl() -> None
```

##### `reset_secondary_overrides` <a name="reset_secondary_overrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```python
def reset_secondary_overrides() -> None
```

##### `reset_soa` <a name="reset_soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```python
def reset_soa() -> None
```

##### `reset_zone_mode` <a name="reset_zone_mode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```python
def reset_zone_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns">internal_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">flatten_all_cnames_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">foundation_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">internal_dns_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">multi_provider_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput">nameservers_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">ns_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">secondary_overrides_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput">soa_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">zone_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flatten_all_cnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundation_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider">multi_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl">ns_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondary_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode">zone_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_dns`<sup>Required</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```python
internal_dns: DnsSettingsZoneDefaultsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```python
nameservers: DnsSettingsZoneDefaultsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```python
soa: DnsSettingsZoneDefaultsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `flatten_all_cnames_input`<sup>Optional</sup> <a name="flatten_all_cnames_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```python
flatten_all_cnames_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `foundation_dns_input`<sup>Optional</sup> <a name="foundation_dns_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```python
foundation_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_dns_input`<sup>Optional</sup> <a name="internal_dns_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```python
internal_dns_input: typing.Union[IResolvable, DnsSettingsZoneDefaultsInternalDns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>]

---

##### `multi_provider_input`<sup>Optional</sup> <a name="multi_provider_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```python
multi_provider_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```python
nameservers_input: typing.Union[IResolvable, DnsSettingsZoneDefaultsNameservers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>]

---

##### `ns_ttl_input`<sup>Optional</sup> <a name="ns_ttl_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```python
ns_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_overrides_input`<sup>Optional</sup> <a name="secondary_overrides_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```python
secondary_overrides_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soa_input`<sup>Optional</sup> <a name="soa_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```python
soa_input: typing.Union[IResolvable, DnsSettingsZoneDefaultsSoa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>]

---

##### `zone_mode_input`<sup>Optional</sup> <a name="zone_mode_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```python
zone_mode_input: str
```

- *Type:* str

---

##### `flatten_all_cnames`<sup>Required</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```python
flatten_all_cnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `foundation_dns`<sup>Required</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```python
foundation_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_provider`<sup>Required</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```python
multi_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ns_ttl`<sup>Required</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```python
ns_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_overrides`<sup>Required</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```python
secondary_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_mode`<sup>Required</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```python
zone_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSettingsZoneDefaults]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>]

---


### DnsSettingsZoneDefaultsSoaOutputReference <a name="DnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import dns_settings

dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">expire_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">mname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">refresh_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">retry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">rname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_input`<sup>Optional</sup> <a name="expire_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```python
expire_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl_input`<sup>Optional</sup> <a name="min_ttl_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```python
min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mname_input`<sup>Optional</sup> <a name="mname_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```python
mname_input: str
```

- *Type:* str

---

##### `refresh_input`<sup>Optional</sup> <a name="refresh_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```python
refresh_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```python
retry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rname_input`<sup>Optional</sup> <a name="rname_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```python
rname_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```python
mname: str
```

- *Type:* str

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```python
refresh: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```python
retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```python
rname: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSettingsZoneDefaultsSoa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>]

---



