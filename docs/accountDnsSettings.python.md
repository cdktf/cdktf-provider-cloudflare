# `accountDnsSettings` Submodule <a name="`accountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettings <a name="AccountDnsSettings" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettings(
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
  zone_defaults: AccountDnsSettingsZoneDefaults = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `zone_defaults`<sup>Optional</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.zoneDefaults"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults">put_zone_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults">reset_zone_defaults</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_zone_defaults` <a name="put_zone_defaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults"></a>

```python
def put_zone_defaults(
  flatten_all_cnames: typing.Union[bool, IResolvable] = None,
  foundation_dns: typing.Union[bool, IResolvable] = None,
  internal_dns: AccountDnsSettingsZoneDefaultsInternalDns = None,
  multi_provider: typing.Union[bool, IResolvable] = None,
  nameservers: AccountDnsSettingsZoneDefaultsNameservers = None,
  ns_ttl: typing.Union[int, float] = None,
  secondary_overrides: typing.Union[bool, IResolvable] = None,
  soa: AccountDnsSettingsZoneDefaultsSoa = None,
  zone_mode: str = None
) -> None
```

###### `flatten_all_cnames`<sup>Optional</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.flattenAllCnames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

###### `foundation_dns`<sup>Optional</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.foundationDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

###### `internal_dns`<sup>Optional</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.internalDns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

###### `multi_provider`<sup>Optional</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.multiProvider"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

###### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.nameservers"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

###### `ns_ttl`<sup>Optional</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.nsTtl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

###### `secondary_overrides`<sup>Optional</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.secondaryOverrides"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

###### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.soa"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

###### `zone_mode`<sup>Optional</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.zoneMode"></a>

- *Type:* str

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

##### `reset_zone_defaults` <a name="reset_zone_defaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults"></a>

```python
def reset_zone_defaults() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountDnsSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput">zone_defaults_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_defaults`<sup>Required</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults"></a>

```python
zone_defaults: AccountDnsSettingsZoneDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `zone_defaults_input`<sup>Optional</sup> <a name="zone_defaults_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput"></a>

```python
zone_defaults_input: typing.Union[IResolvable, AccountDnsSettingsZoneDefaults]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsConfig <a name="AccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  zone_defaults: AccountDnsSettingsZoneDefaults = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults">zone_defaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `zone_defaults`<sup>Optional</sup> <a name="zone_defaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults"></a>

```python
zone_defaults: AccountDnsSettingsZoneDefaults
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

### AccountDnsSettingsZoneDefaults <a name="AccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaults(
  flatten_all_cnames: typing.Union[bool, IResolvable] = None,
  foundation_dns: typing.Union[bool, IResolvable] = None,
  internal_dns: AccountDnsSettingsZoneDefaultsInternalDns = None,
  multi_provider: typing.Union[bool, IResolvable] = None,
  nameservers: AccountDnsSettingsZoneDefaultsNameservers = None,
  ns_ttl: typing.Union[int, float] = None,
  secondary_overrides: typing.Union[bool, IResolvable] = None,
  soa: AccountDnsSettingsZoneDefaultsSoa = None,
  zone_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames">flatten_all_cnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns">foundation_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns">internal_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider">multi_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl">ns_ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides">secondary_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode">zone_mode</a></code> | <code>str</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `flatten_all_cnames`<sup>Optional</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```python
flatten_all_cnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

##### `foundation_dns`<sup>Optional</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns"></a>

```python
foundation_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

##### `internal_dns`<sup>Optional</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns"></a>

```python
internal_dns: AccountDnsSettingsZoneDefaultsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

##### `multi_provider`<sup>Optional</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider"></a>

```python
multi_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers"></a>

```python
nameservers: AccountDnsSettingsZoneDefaultsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

##### `ns_ttl`<sup>Optional</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl"></a>

```python
ns_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

##### `secondary_overrides`<sup>Optional</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```python
secondary_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa"></a>

```python
soa: AccountDnsSettingsZoneDefaultsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

##### `zone_mode`<sup>Optional</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode"></a>

```python
zone_mode: str
```

- *Type:* str

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

### AccountDnsSettingsZoneDefaultsInternalDns <a name="AccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns(
  reference_zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">reference_zone_id</a></code> | <code>str</code> | The ID of the zone to fallback to. |

---

##### `reference_zone_id`<sup>Optional</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```python
reference_zone_id: str
```

- *Type:* str

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

### AccountDnsSettingsZoneDefaultsNameservers <a name="AccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type">type</a></code> | <code>str</code> | Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type"></a>

```python
type: str
```

- *Type:* str

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

### AccountDnsSettingsZoneDefaultsSoa <a name="AccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa(
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
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname">mname</a></code> | <code>str</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh">refresh</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry">retry</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname">rname</a></code> | <code>str</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname"></a>

```python
mname: str
```

- *Type:* str

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh"></a>

```python
refresh: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry"></a>

```python
retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname"></a>

```python
rname: str
```

- *Type:* str

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="AccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">reset_reference_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reference_zone_id` <a name="reset_reference_zone_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```python
def reset_reference_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">reference_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">reference_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_zone_id_input`<sup>Optional</sup> <a name="reference_zone_id_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```python
reference_zone_id_input: str
```

- *Type:* str

---

##### `reference_zone_id`<sup>Required</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```python
reference_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsInternalDns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>]

---


### AccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="AccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsNameservers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>]

---


### AccountDnsSettingsZoneDefaultsOutputReference <a name="AccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns">put_internal_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers">put_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa">put_soa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">reset_flatten_all_cnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns">reset_foundation_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns">reset_internal_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider">reset_multi_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers">reset_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl">reset_ns_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">reset_secondary_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa">reset_soa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode">reset_zone_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internal_dns` <a name="put_internal_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```python
def put_internal_dns(
  reference_zone_id: str = None
) -> None
```

###### `reference_zone_id`<sup>Optional</sup> <a name="reference_zone_id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.referenceZoneId"></a>

- *Type:* str

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

##### `put_nameservers` <a name="put_nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```python
def put_nameservers(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.type"></a>

- *Type:* str

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

##### `put_soa` <a name="put_soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa"></a>

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

###### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.expire"></a>

- *Type:* typing.Union[int, float]

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

###### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.minTtl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

###### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.mname"></a>

- *Type:* str

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

###### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.refresh"></a>

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

###### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.retry"></a>

- *Type:* typing.Union[int, float]

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

###### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.rname"></a>

- *Type:* str

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

###### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

##### `reset_flatten_all_cnames` <a name="reset_flatten_all_cnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```python
def reset_flatten_all_cnames() -> None
```

##### `reset_foundation_dns` <a name="reset_foundation_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```python
def reset_foundation_dns() -> None
```

##### `reset_internal_dns` <a name="reset_internal_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```python
def reset_internal_dns() -> None
```

##### `reset_multi_provider` <a name="reset_multi_provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```python
def reset_multi_provider() -> None
```

##### `reset_nameservers` <a name="reset_nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```python
def reset_nameservers() -> None
```

##### `reset_ns_ttl` <a name="reset_ns_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```python
def reset_ns_ttl() -> None
```

##### `reset_secondary_overrides` <a name="reset_secondary_overrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```python
def reset_secondary_overrides() -> None
```

##### `reset_soa` <a name="reset_soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```python
def reset_soa() -> None
```

##### `reset_zone_mode` <a name="reset_zone_mode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```python
def reset_zone_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">internal_dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">flatten_all_cnames_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">foundation_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">internal_dns_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">multi_provider_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput">nameservers_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">ns_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">secondary_overrides_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput">soa_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">zone_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flatten_all_cnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundation_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">multi_provider</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">ns_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondary_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">zone_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_dns`<sup>Required</sup> <a name="internal_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```python
internal_dns: AccountDnsSettingsZoneDefaultsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```python
nameservers: AccountDnsSettingsZoneDefaultsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```python
soa: AccountDnsSettingsZoneDefaultsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `flatten_all_cnames_input`<sup>Optional</sup> <a name="flatten_all_cnames_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```python
flatten_all_cnames_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `foundation_dns_input`<sup>Optional</sup> <a name="foundation_dns_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```python
foundation_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_dns_input`<sup>Optional</sup> <a name="internal_dns_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```python
internal_dns_input: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsInternalDns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>]

---

##### `multi_provider_input`<sup>Optional</sup> <a name="multi_provider_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```python
multi_provider_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```python
nameservers_input: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsNameservers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>]

---

##### `ns_ttl_input`<sup>Optional</sup> <a name="ns_ttl_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```python
ns_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_overrides_input`<sup>Optional</sup> <a name="secondary_overrides_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```python
secondary_overrides_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `soa_input`<sup>Optional</sup> <a name="soa_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```python
soa_input: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsSoa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>]

---

##### `zone_mode_input`<sup>Optional</sup> <a name="zone_mode_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```python
zone_mode_input: str
```

- *Type:* str

---

##### `flatten_all_cnames`<sup>Required</sup> <a name="flatten_all_cnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```python
flatten_all_cnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `foundation_dns`<sup>Required</sup> <a name="foundation_dns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```python
foundation_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_provider`<sup>Required</sup> <a name="multi_provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```python
multi_provider: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ns_ttl`<sup>Required</sup> <a name="ns_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```python
ns_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_overrides`<sup>Required</sup> <a name="secondary_overrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```python
secondary_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_mode`<sup>Required</sup> <a name="zone_mode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```python
zone_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountDnsSettingsZoneDefaults]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>]

---


### AccountDnsSettingsZoneDefaultsSoaOutputReference <a name="AccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_dns_settings

accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">expire_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">mname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">refresh_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">retry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">rname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_input`<sup>Optional</sup> <a name="expire_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```python
expire_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl_input`<sup>Optional</sup> <a name="min_ttl_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```python
min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mname_input`<sup>Optional</sup> <a name="mname_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```python
mname_input: str
```

- *Type:* str

---

##### `refresh_input`<sup>Optional</sup> <a name="refresh_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```python
refresh_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```python
retry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rname_input`<sup>Optional</sup> <a name="rname_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```python
rname_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```python
mname: str
```

- *Type:* str

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```python
refresh: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```python
retry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```python
rname: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountDnsSettingsZoneDefaultsSoa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>]

---



