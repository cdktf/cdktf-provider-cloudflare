# `magicWanStaticRoute` Submodule <a name="`magicWanStaticRoute` Submodule" id="@cdktf/provider-cloudflare.magicWanStaticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanStaticRoute <a name="MagicWanStaticRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRoute(
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
  nexthop: str,
  prefix: str,
  priority: typing.Union[int, float],
  description: str = None,
  route: MagicWanStaticRouteRoute = None,
  scope: MagicWanStaticRouteScope = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.nexthop">nexthop</a></code> | <code>str</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Optional weight of the ECMP scope - if provided. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.nexthop"></a>

- *Type:* str

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.prefix"></a>

- *Type:* str

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.description"></a>

- *Type:* str

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.route"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_route` <a name="put_route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute"></a>

```python
def put_route(
  description: str = None,
  nexthop: str = None,
  prefix: str = None,
  priority: typing.Union[int, float] = None,
  scope: MagicWanStaticRouteRouteScope = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.description"></a>

- *Type:* str

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

###### `nexthop`<sup>Optional</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.nexthop"></a>

- *Type:* str

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.prefix"></a>

- *Type:* str

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putRoute.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope"></a>

```python
def put_scope(
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None
) -> None
```

###### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope.parameter.coloNames"></a>

- *Type:* typing.List[str]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

###### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.putScope.parameter.coloRegions"></a>

- *Type:* typing.List[str]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicWanStaticRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicWanStaticRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanStaticRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modified">modified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedRoute">modified_route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference">MagicWanStaticRouteModifiedRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference">MagicWanStaticRouteRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput">nexthop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.routeInput">route_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop">nexthop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modified"></a>

```python
modified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `modified_route`<sup>Required</sup> <a name="modified_route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.modifiedRoute"></a>

```python
modified_route: MagicWanStaticRouteModifiedRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference">MagicWanStaticRouteModifiedRouteOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.route"></a>

```python
route: MagicWanStaticRouteRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference">MagicWanStaticRouteRouteOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scope"></a>

```python
scope: MagicWanStaticRouteScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference">MagicWanStaticRouteScopeOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `nexthop_input`<sup>Optional</sup> <a name="nexthop_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthopInput"></a>

```python
nexthop_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.routeInput"></a>

```python
route_input: typing.Union[IResolvable, MagicWanStaticRouteRoute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, MagicWanStaticRouteScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanStaticRouteConfig <a name="MagicWanStaticRouteConfig" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  nexthop: str,
  prefix: str,
  priority: typing.Union[int, float],
  description: str = None,
  route: MagicWanStaticRouteRoute = None,
  scope: MagicWanStaticRouteScope = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop">nexthop</a></code> | <code>str</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix">prefix</a></code> | <code>str</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description">description</a></code> | <code>str</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Optional weight of the ECMP scope - if provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.route"></a>

```python
route: MagicWanStaticRouteRoute
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#route MagicWanStaticRoute#route}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.scope"></a>

```python
scope: MagicWanStaticRouteScope
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

### MagicWanStaticRouteModifiedRoute <a name="MagicWanStaticRouteModifiedRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteModifiedRoute()
```


### MagicWanStaticRouteModifiedRouteScope <a name="MagicWanStaticRouteModifiedRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope()
```


### MagicWanStaticRouteRoute <a name="MagicWanStaticRouteRoute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteRoute(
  description: str = None,
  nexthop: str = None,
  prefix: str = None,
  priority: typing.Union[int, float] = None,
  scope: MagicWanStaticRouteRouteScope = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.description">description</a></code> | <code>str</code> | An optional human provided description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.nexthop">nexthop</a></code> | <code>str</code> | The next-hop IP Address for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.prefix">prefix</a></code> | <code>str</code> | IP Prefix in Classless Inter-Domain Routing format. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a></code> | Used only for ECMP routes. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Optional weight of the ECMP scope - if provided. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.description"></a>

```python
description: str
```

- *Type:* str

An optional human provided description of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}

---

##### `nexthop`<sup>Optional</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

The next-hop IP Address for the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

IP Prefix in Classless Inter-Domain Routing format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the static route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.scope"></a>

```python
scope: MagicWanStaticRouteRouteScope
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>

Used only for ECMP routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional weight of the ECMP scope - if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}

---

### MagicWanStaticRouteRouteScope <a name="MagicWanStaticRouteRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteRouteScope(
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | List of colo names for the ECMP scope. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | List of colo regions for the ECMP scope. |

---

##### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

##### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

### MagicWanStaticRouteScope <a name="MagicWanStaticRouteScope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteScope(
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | List of colo names for the ECMP scope. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | List of colo regions for the ECMP scope. |

---

##### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

##### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanStaticRouteModifiedRouteOutputReference <a name="MagicWanStaticRouteModifiedRouteOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.nexthop">nexthop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference">MagicWanStaticRouteModifiedRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute">MagicWanStaticRouteModifiedRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.scope"></a>

```python
scope: MagicWanStaticRouteModifiedRouteScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference">MagicWanStaticRouteModifiedRouteScopeOutputReference</a>

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanStaticRouteModifiedRoute
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRoute">MagicWanStaticRouteModifiedRoute</a>

---


### MagicWanStaticRouteModifiedRouteScopeOutputReference <a name="MagicWanStaticRouteModifiedRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope">MagicWanStaticRouteModifiedRouteScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colo_names`<sup>Required</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions`<sup>Required</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScopeOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanStaticRouteModifiedRouteScope
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteModifiedRouteScope">MagicWanStaticRouteModifiedRouteScope</a>

---


### MagicWanStaticRouteRouteOutputReference <a name="MagicWanStaticRouteRouteOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetNexthop">reset_nexthop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scope` <a name="put_scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope"></a>

```python
def put_scope(
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None
) -> None
```

###### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope.parameter.coloNames"></a>

- *Type:* typing.List[str]

List of colo names for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}

---

###### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.putScope.parameter.coloRegions"></a>

- *Type:* typing.List[str]

List of colo regions for the ECMP scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_nexthop` <a name="reset_nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetNexthop"></a>

```python
def reset_nexthop() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference">MagicWanStaticRouteRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthopInput">nexthop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthop">nexthop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scope"></a>

```python
scope: MagicWanStaticRouteRouteScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference">MagicWanStaticRouteRouteScopeOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `nexthop_input`<sup>Optional</sup> <a name="nexthop_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthopInput"></a>

```python
nexthop_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, MagicWanStaticRouteRouteScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanStaticRouteRoute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRoute">MagicWanStaticRouteRoute</a>]

---


### MagicWanStaticRouteRouteScopeOutputReference <a name="MagicWanStaticRouteRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoNames">reset_colo_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoRegions">reset_colo_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_colo_names` <a name="reset_colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoNames"></a>

```python
def reset_colo_names() -> None
```

##### `reset_colo_regions` <a name="reset_colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.resetColoRegions"></a>

```python
def reset_colo_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNamesInput">colo_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegionsInput">colo_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colo_names_input`<sup>Optional</sup> <a name="colo_names_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNamesInput"></a>

```python
colo_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions_input`<sup>Optional</sup> <a name="colo_regions_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegionsInput"></a>

```python
colo_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_names`<sup>Required</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions`<sup>Required</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanStaticRouteRouteScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteRouteScope">MagicWanStaticRouteRouteScope</a>]

---


### MagicWanStaticRouteScopeOutputReference <a name="MagicWanStaticRouteScopeOutputReference" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_wan_static_route

magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames">reset_colo_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions">reset_colo_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_colo_names` <a name="reset_colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoNames"></a>

```python
def reset_colo_names() -> None
```

##### `reset_colo_regions` <a name="reset_colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.resetColoRegions"></a>

```python
def reset_colo_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput">colo_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput">colo_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colo_names_input`<sup>Optional</sup> <a name="colo_names_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNamesInput"></a>

```python
colo_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions_input`<sup>Optional</sup> <a name="colo_regions_input" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegionsInput"></a>

```python
colo_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_names`<sup>Required</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions`<sup>Required</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicWanStaticRouteScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicWanStaticRoute.MagicWanStaticRouteScope">MagicWanStaticRouteScope</a>]

---



