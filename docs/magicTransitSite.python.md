# `magicTransitSite` Submodule <a name="`magicTransitSite` Submodule" id="@cdktf/provider-cloudflare.magicTransitSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSite <a name="MagicTransitSite" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSite(
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
  name: str,
  connector_id: str = None,
  description: str = None,
  ha_mode: bool | IResolvable = None,
  location: MagicTransitSiteLocation = None,
  secondary_connector_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the site. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connectorId">connector_id</a></code> | <code>str</code> | Magic Connector identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#description MagicTransitSite#description}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.haMode">ha_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Site high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | Location of site in latitude and longitude. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.secondaryConnectorId">secondary_connector_id</a></code> | <code>str</code> | Magic Connector identifier tag. Used when high availability mode is on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.name"></a>

- *Type:* str

The name of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#name MagicTransitSite#name}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connectorId"></a>

- *Type:* str

Magic Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#description MagicTransitSite#description}.

---

##### `ha_mode`<sup>Optional</sup> <a name="ha_mode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.haMode"></a>

- *Type:* bool | cdktf.IResolvable

Site high availability mode.

If set to true, the site can have two connectors and runs in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

Location of site in latitude and longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#location MagicTransitSite#location}

---

##### `secondary_connector_id`<sup>Optional</sup> <a name="secondary_connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.secondaryConnectorId"></a>

- *Type:* str

Magic Connector identifier tag. Used when high availability mode is on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId">reset_connector_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode">reset_ha_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId">reset_secondary_connector_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_location` <a name="put_location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation"></a>

```python
def put_location(
  lat: str = None,
  lon: str = None
) -> None
```

###### `lat`<sup>Optional</sup> <a name="lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation.parameter.lat"></a>

- *Type:* str

Latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}

---

###### `lon`<sup>Optional</sup> <a name="lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation.parameter.lon"></a>

- *Type:* str

Longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}

---

##### `reset_connector_id` <a name="reset_connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId"></a>

```python
def reset_connector_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ha_mode` <a name="reset_ha_mode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode"></a>

```python
def reset_ha_mode() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_secondary_connector_id` <a name="reset_secondary_connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId"></a>

```python
def reset_secondary_connector_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSite.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicTransitSite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicTransitSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput">connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput">ha_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput">location_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput">secondary_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode">ha_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId">secondary_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location"></a>

```python
location: MagicTransitSiteLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `connector_id_input`<sup>Optional</sup> <a name="connector_id_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput"></a>

```python
connector_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ha_mode_input`<sup>Optional</sup> <a name="ha_mode_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput"></a>

```python
ha_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput"></a>

```python
location_input: IResolvable | MagicTransitSiteLocation
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secondary_connector_id_input`<sup>Optional</sup> <a name="secondary_connector_id_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput"></a>

```python
secondary_connector_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode"></a>

```python
ha_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_connector_id`<sup>Required</sup> <a name="secondary_connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId"></a>

```python
secondary_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteConfig <a name="MagicTransitSiteConfig" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  connector_id: str = None,
  description: str = None,
  ha_mode: bool | IResolvable = None,
  location: MagicTransitSiteLocation = None,
  secondary_connector_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name">name</a></code> | <code>str</code> | The name of the site. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId">connector_id</a></code> | <code>str</code> | Magic Connector identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#description MagicTransitSite#description}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode">ha_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Site high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | Location of site in latitude and longitude. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId">secondary_connector_id</a></code> | <code>str</code> | Magic Connector identifier tag. Used when high availability mode is on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#name MagicTransitSite#name}

---

##### `connector_id`<sup>Optional</sup> <a name="connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

Magic Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#description MagicTransitSite#description}.

---

##### `ha_mode`<sup>Optional</sup> <a name="ha_mode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode"></a>

```python
ha_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Site high availability mode.

If set to true, the site can have two connectors and runs in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location"></a>

```python
location: MagicTransitSiteLocation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

Location of site in latitude and longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#location MagicTransitSite#location}

---

##### `secondary_connector_id`<sup>Optional</sup> <a name="secondary_connector_id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId"></a>

```python
secondary_connector_id: str
```

- *Type:* str

Magic Connector identifier tag. Used when high availability mode is on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}

---

### MagicTransitSiteLocation <a name="MagicTransitSiteLocation" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSiteLocation(
  lat: str = None,
  lon: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat">lat</a></code> | <code>str</code> | Latitude. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon">lon</a></code> | <code>str</code> | Longitude. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat"></a>

```python
lat: str
```

- *Type:* str

Latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}

---

##### `lon`<sup>Optional</sup> <a name="lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon"></a>

```python
lon: str
```

- *Type:* str

Longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLocationOutputReference <a name="MagicTransitSiteLocationOutputReference" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site

magicTransitSite.MagicTransitSiteLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat">reset_lat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon">reset_lon</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lat` <a name="reset_lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat"></a>

```python
def reset_lat() -> None
```

##### `reset_lon` <a name="reset_lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon"></a>

```python
def reset_lon() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput">lat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput">lon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat">lat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon">lon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat_input`<sup>Optional</sup> <a name="lat_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput"></a>

```python
lat_input: str
```

- *Type:* str

---

##### `lon_input`<sup>Optional</sup> <a name="lon_input" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput"></a>

```python
lon_input: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat"></a>

```python
lat: str
```

- *Type:* str

---

##### `lon`<sup>Required</sup> <a name="lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon"></a>

```python
lon: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicTransitSiteLocation
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---



