# `magicTransitSiteWan` Submodule <a name="`magicTransitSiteWan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteWan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteWan <a name="MagicTransitSiteWan" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  physport: typing.Union[int, float],
  site_id: str,
  name: str = None,
  priority: typing.Union[int, float] = None,
  static_addressing: MagicTransitSiteWanStaticAddressing = None,
  vlan_tag: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.physport">physport</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.staticAddressing">static_addressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.vlanTag">vlan_tag</a></code> | <code>typing.Union[int, float]</code> | VLAN ID. Use zero for untagged. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.physport"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.siteId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `static_addressing`<sup>Optional</sup> <a name="static_addressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.staticAddressing"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `vlan_tag`<sup>Optional</sup> <a name="vlan_tag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.vlanTag"></a>

- *Type:* typing.Union[int, float]

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing">put_static_addressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing">reset_static_addressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag">reset_vlan_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_static_addressing` <a name="put_static_addressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing"></a>

```python
def put_static_addressing(
  address: str,
  gateway_address: str,
  secondary_address: str = None
) -> None
```

###### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.address"></a>

- *Type:* str

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

###### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.gatewayAddress"></a>

- *Type:* str

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

###### `secondary_address`<sup>Optional</sup> <a name="secondary_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.secondaryAddress"></a>

- *Type:* str

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_static_addressing` <a name="reset_static_addressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing"></a>

```python
def reset_static_addressing() -> None
```

##### `reset_vlan_tag` <a name="reset_vlan_tag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag"></a>

```python
def reset_vlan_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicTransitSiteWan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicTransitSiteWan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteWan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate">health_check_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing">static_addressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput">physport_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput">static_addressing_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput">vlan_tag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport">physport</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag">vlan_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `health_check_rate`<sup>Required</sup> <a name="health_check_rate" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate"></a>

```python
health_check_rate: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `static_addressing`<sup>Required</sup> <a name="static_addressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing"></a>

```python
static_addressing: MagicTransitSiteWanStaticAddressingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physport_input`<sup>Optional</sup> <a name="physport_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput"></a>

```python
physport_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `static_addressing_input`<sup>Optional</sup> <a name="static_addressing_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput"></a>

```python
static_addressing_input: IResolvable | MagicTransitSiteWanStaticAddressing
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `vlan_tag_input`<sup>Optional</sup> <a name="vlan_tag_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput"></a>

```python
vlan_tag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport"></a>

```python
physport: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `vlan_tag`<sup>Required</sup> <a name="vlan_tag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag"></a>

```python
vlan_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteWanConfig <a name="MagicTransitSiteWanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  physport: typing.Union[int, float],
  site_id: str,
  name: str = None,
  priority: typing.Union[int, float] = None,
  static_addressing: MagicTransitSiteWanStaticAddressing = None,
  vlan_tag: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport">physport</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId">site_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing">static_addressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag">vlan_tag</a></code> | <code>typing.Union[int, float]</code> | VLAN ID. Use zero for untagged. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport"></a>

```python
physport: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `static_addressing`<sup>Optional</sup> <a name="static_addressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing"></a>

```python
static_addressing: MagicTransitSiteWanStaticAddressing
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `vlan_tag`<sup>Optional</sup> <a name="vlan_tag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag"></a>

```python
vlan_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

### MagicTransitSiteWanStaticAddressing <a name="MagicTransitSiteWanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWanStaticAddressing(
  address: str,
  gateway_address: str,
  secondary_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address">address</a></code> | <code>str</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress">gateway_address</a></code> | <code>str</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress">secondary_address</a></code> | <code>str</code> | A valid CIDR notation representing an IP range. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address"></a>

```python
address: str
```

- *Type:* str

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

##### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress"></a>

```python
gateway_address: str
```

- *Type:* str

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

##### `secondary_address`<sup>Optional</sup> <a name="secondary_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress"></a>

```python
secondary_address: str
```

- *Type:* str

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteWanStaticAddressingOutputReference <a name="MagicTransitSiteWanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_wan

magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress">reset_secondary_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_address` <a name="reset_secondary_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```python
def reset_secondary_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput">gateway_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput">secondary_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress">gateway_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress">secondary_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `gateway_address_input`<sup>Optional</sup> <a name="gateway_address_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput"></a>

```python
gateway_address_input: str
```

- *Type:* str

---

##### `secondary_address_input`<sup>Optional</sup> <a name="secondary_address_input" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```python
secondary_address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress"></a>

```python
gateway_address: str
```

- *Type:* str

---

##### `secondary_address`<sup>Required</sup> <a name="secondary_address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress"></a>

```python
secondary_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicTransitSiteWanStaticAddressing
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---



