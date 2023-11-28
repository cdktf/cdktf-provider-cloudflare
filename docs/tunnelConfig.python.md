# `tunnelConfig` Submodule <a name="`tunnelConfig` Submodule" id="@cdktf/provider-cloudflare.tunnelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TunnelConfigA <a name="TunnelConfigA" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config cloudflare_tunnel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigA(
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
  config: TunnelConfigConfig,
  tunnel_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#id TunnelConfigA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#account_id TunnelConfigA#account_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#config TunnelConfigA#config}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.tunnelId"></a>

- *Type:* str

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tunnel_id TunnelConfigA#tunnel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#id TunnelConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig"></a>

```python
def put_config(
  ingress_rule: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]],
  origin_request: TunnelConfigConfigOriginRequest = None,
  warp_routing: TunnelConfigConfigWarpRouting = None
) -> None
```

###### `ingress_rule`<sup>Required</sup> <a name="ingress_rule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig.parameter.ingressRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]

ingress_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ingress_rule TunnelConfigA#ingress_rule}

---

###### `origin_request`<sup>Optional</sup> <a name="origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig.parameter.originRequest"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}

---

###### `warp_routing`<sup>Optional</sup> <a name="warp_routing" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig.parameter.warpRouting"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#warp_routing TunnelConfigA#warp_routing}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TunnelConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TunnelConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TunnelConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TunnelConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TunnelConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference">TunnelConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.config"></a>

```python
config: TunnelConfigConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference">TunnelConfigConfigOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.configInput"></a>

```python
config_input: TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TunnelConfigAConfig <a name="TunnelConfigAConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  config: TunnelConfigConfig,
  tunnel_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#id TunnelConfigA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#account_id TunnelConfigA#account_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.config"></a>

```python
config: TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#config TunnelConfigA#config}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tunnel_id TunnelConfigA#tunnel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#id TunnelConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TunnelConfigConfig <a name="TunnelConfigConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfig(
  ingress_rule: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]],
  origin_request: TunnelConfigConfigOriginRequest = None,
  warp_routing: TunnelConfigConfigWarpRouting = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.ingressRule">ingress_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]</code> | ingress_rule block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.originRequest">origin_request</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.warpRouting">warp_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | warp_routing block. |

---

##### `ingress_rule`<sup>Required</sup> <a name="ingress_rule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.ingressRule"></a>

```python
ingress_rule: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]

ingress_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ingress_rule TunnelConfigA#ingress_rule}

---

##### `origin_request`<sup>Optional</sup> <a name="origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.originRequest"></a>

```python
origin_request: TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}

---

##### `warp_routing`<sup>Optional</sup> <a name="warp_routing" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.warpRouting"></a>

```python
warp_routing: TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#warp_routing TunnelConfigA#warp_routing}

---

### TunnelConfigConfigIngressRule <a name="TunnelConfigConfigIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRule(
  service: str,
  hostname: str = None,
  origin_request: TunnelConfigConfigIngressRuleOriginRequest = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service">service</a></code> | <code>str</code> | Name of the service to which the request will be sent. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname">hostname</a></code> | <code>str</code> | Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.originRequest">origin_request</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path">path</a></code> | <code>str</code> | Path of the incoming request. If the path matches, the request will be sent to the local service. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service"></a>

```python
service: str
```

- *Type:* str

Name of the service to which the request will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#service TunnelConfigA#service}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#hostname TunnelConfigA#hostname}

---

##### `origin_request`<sup>Optional</sup> <a name="origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.originRequest"></a>

```python
origin_request: TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the incoming request. If the path matches, the request will be sent to the local service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#path TunnelConfigA#path}

---

### TunnelConfigConfigIngressRuleOriginRequest <a name="TunnelConfigConfigIngressRuleOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest(
  access: TunnelConfigConfigIngressRuleOriginRequestAccess = None,
  bastion_mode: typing.Union[bool, IResolvable] = None,
  ca_pool: str = None,
  connect_timeout: str = None,
  disable_chunked_encoding: typing.Union[bool, IResolvable] = None,
  http2_origin: typing.Union[bool, IResolvable] = None,
  http_host_header: str = None,
  ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]] = None,
  keep_alive_connections: typing.Union[int, float] = None,
  keep_alive_timeout: str = None,
  no_happy_eyeballs: typing.Union[bool, IResolvable] = None,
  no_tls_verify: typing.Union[bool, IResolvable] = None,
  origin_server_name: str = None,
  proxy_address: str = None,
  proxy_port: typing.Union[int, float] = None,
  proxy_type: str = None,
  tcp_keep_alive: str = None,
  tls_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.access">access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | access block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.bastionMode">bastion_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.caPool">ca_pool</a></code> | <code>str</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.disableChunkedEncoding">disable_chunked_encoding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.http2Origin">http2_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables HTTP/2 support for the origin connection. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.httpHostHeader">http_host_header</a></code> | <code>str</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.ipRules">ip_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveConnections">keep_alive_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>str</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noHappyEyeballs">no_happy_eyeballs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noTlsVerify">no_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.originServerName">origin_server_name</a></code> | <code>str</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyAddress">proxy_address</a></code> | <code>str</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyType">proxy_type</a></code> | <code>str</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tcpKeepAlive">tcp_keep_alive</a></code> | <code>str</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tlsTimeout">tls_timeout</a></code> | <code>str</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.access"></a>

```python
access: TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

##### `bastion_mode`<sup>Optional</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.bastionMode"></a>

```python
bastion_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

##### `ca_pool`<sup>Optional</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

##### `disable_chunked_encoding`<sup>Optional</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.disableChunkedEncoding"></a>

```python
disable_chunked_encoding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

##### `http2_origin`<sup>Optional</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.http2Origin"></a>

```python
http2_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

##### `http_host_header`<sup>Optional</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.httpHostHeader"></a>

```python
http_host_header: str
```

- *Type:* str

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.ipRules"></a>

```python
ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

##### `keep_alive_connections`<sup>Optional</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveConnections"></a>

```python
keep_alive_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

##### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: str
```

- *Type:* str

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

##### `no_happy_eyeballs`<sup>Optional</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noHappyEyeballs"></a>

```python
no_happy_eyeballs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

##### `no_tls_verify`<sup>Optional</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noTlsVerify"></a>

```python
no_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

##### `origin_server_name`<sup>Optional</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.originServerName"></a>

```python
origin_server_name: str
```

- *Type:* str

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

##### `proxy_address`<sup>Optional</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

##### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

##### `proxy_type`<sup>Optional</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

##### `tcp_keep_alive`<sup>Optional</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tcpKeepAlive"></a>

```python
tcp_keep_alive: str
```

- *Type:* str

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

##### `tls_timeout`<sup>Optional</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tlsTimeout"></a>

```python
tls_timeout: str
```

- *Type:* str

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

### TunnelConfigConfigIngressRuleOriginRequestAccess <a name="TunnelConfigConfigIngressRuleOriginRequestAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess(
  aud_tag: typing.List[str] = None,
  required: typing.Union[bool, IResolvable] = None,
  team_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.audTag">aud_tag</a></code> | <code>typing.List[str]</code> | Audience tags of the access rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the access rule is required. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.teamName">team_name</a></code> | <code>str</code> | Name of the team to which the access rule applies. |

---

##### `aud_tag`<sup>Optional</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.audTag"></a>

```python
aud_tag: typing.List[str]
```

- *Type:* typing.List[str]

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

##### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

### TunnelConfigConfigIngressRuleOriginRequestIpRules <a name="TunnelConfigConfigIngressRuleOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules(
  allow: typing.Union[bool, IResolvable] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.allow">allow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.prefix">prefix</a></code> | <code>str</code> | IP rule prefix. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.allow"></a>

```python
allow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

IP rule prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}

---

### TunnelConfigConfigOriginRequest <a name="TunnelConfigConfigOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequest(
  access: TunnelConfigConfigOriginRequestAccess = None,
  bastion_mode: typing.Union[bool, IResolvable] = None,
  ca_pool: str = None,
  connect_timeout: str = None,
  disable_chunked_encoding: typing.Union[bool, IResolvable] = None,
  http2_origin: typing.Union[bool, IResolvable] = None,
  http_host_header: str = None,
  ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]] = None,
  keep_alive_connections: typing.Union[int, float] = None,
  keep_alive_timeout: str = None,
  no_happy_eyeballs: typing.Union[bool, IResolvable] = None,
  no_tls_verify: typing.Union[bool, IResolvable] = None,
  origin_server_name: str = None,
  proxy_address: str = None,
  proxy_port: typing.Union[int, float] = None,
  proxy_type: str = None,
  tcp_keep_alive: str = None,
  tls_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.access">access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | access block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode">bastion_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool">ca_pool</a></code> | <code>str</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding">disable_chunked_encoding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.http2Origin">http2_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables HTTP/2 support for the origin connection. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader">http_host_header</a></code> | <code>str</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules">ip_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections">keep_alive_connections</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>str</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs">no_happy_eyeballs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify">no_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName">origin_server_name</a></code> | <code>str</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress">proxy_address</a></code> | <code>str</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType">proxy_type</a></code> | <code>str</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive">tcp_keep_alive</a></code> | <code>str</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout">tls_timeout</a></code> | <code>str</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.access"></a>

```python
access: TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

##### `bastion_mode`<sup>Optional</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode"></a>

```python
bastion_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

##### `ca_pool`<sup>Optional</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

##### `disable_chunked_encoding`<sup>Optional</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding"></a>

```python
disable_chunked_encoding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

##### `http2_origin`<sup>Optional</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.http2Origin"></a>

```python
http2_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

##### `http_host_header`<sup>Optional</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader"></a>

```python
http_host_header: str
```

- *Type:* str

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules"></a>

```python
ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

##### `keep_alive_connections`<sup>Optional</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections"></a>

```python
keep_alive_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

##### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: str
```

- *Type:* str

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

##### `no_happy_eyeballs`<sup>Optional</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs"></a>

```python
no_happy_eyeballs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

##### `no_tls_verify`<sup>Optional</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify"></a>

```python
no_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

##### `origin_server_name`<sup>Optional</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName"></a>

```python
origin_server_name: str
```

- *Type:* str

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

##### `proxy_address`<sup>Optional</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

##### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

##### `proxy_type`<sup>Optional</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

##### `tcp_keep_alive`<sup>Optional</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive"></a>

```python
tcp_keep_alive: str
```

- *Type:* str

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

##### `tls_timeout`<sup>Optional</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout"></a>

```python
tls_timeout: str
```

- *Type:* str

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

### TunnelConfigConfigOriginRequestAccess <a name="TunnelConfigConfigOriginRequestAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestAccess(
  aud_tag: typing.List[str] = None,
  required: typing.Union[bool, IResolvable] = None,
  team_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.audTag">aud_tag</a></code> | <code>typing.List[str]</code> | Audience tags of the access rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the access rule is required. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.teamName">team_name</a></code> | <code>str</code> | Name of the team to which the access rule applies. |

---

##### `aud_tag`<sup>Optional</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.audTag"></a>

```python
aud_tag: typing.List[str]
```

- *Type:* typing.List[str]

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

##### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

### TunnelConfigConfigOriginRequestIpRules <a name="TunnelConfigConfigOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestIpRules(
  allow: typing.Union[bool, IResolvable] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow">allow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix">prefix</a></code> | <code>str</code> | IP rule prefix. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow"></a>

```python
allow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

IP rule prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}

---

### TunnelConfigConfigWarpRouting <a name="TunnelConfigConfigWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigWarpRouting(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether WARP routing is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#enabled TunnelConfigA#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### TunnelConfigConfigIngressRuleList <a name="TunnelConfigConfigIngressRuleList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TunnelConfigConfigIngressRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]

---


### TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetAudTag">reset_aud_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetTeamName">reset_team_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aud_tag` <a name="reset_aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetAudTag"></a>

```python
def reset_aud_tag() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_team_name` <a name="reset_team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetTeamName"></a>

```python
def reset_team_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTagInput">aud_tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamNameInput">team_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTag">aud_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aud_tag_input`<sup>Optional</sup> <a name="aud_tag_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTagInput"></a>

```python
aud_tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_name_input`<sup>Optional</sup> <a name="team_name_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamNameInput"></a>

```python
team_name_input: str
```

- *Type:* str

---

##### `aud_tag`<sup>Required</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTag"></a>

```python
aud_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

---


### TunnelConfigConfigIngressRuleOriginRequestIpRulesList <a name="TunnelConfigConfigIngressRuleOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]

---


### TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allowInput">allow_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allow">allow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allowInput"></a>

```python
allow_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allow"></a>

```python
allow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TunnelConfigConfigIngressRuleOriginRequestIpRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]

---


### TunnelConfigConfigIngressRuleOriginRequestOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess">put_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules">put_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetBastionMode">reset_bastion_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetCaPool">reset_ca_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetDisableChunkedEncoding">reset_disable_chunked_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttp2Origin">reset_http2_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttpHostHeader">reset_http_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetIpRules">reset_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveConnections">reset_keep_alive_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveTimeout">reset_keep_alive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoHappyEyeballs">reset_no_happy_eyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoTlsVerify">reset_no_tls_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetOriginServerName">reset_origin_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyAddress">reset_proxy_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyPort">reset_proxy_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyType">reset_proxy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTcpKeepAlive">reset_tcp_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTlsTimeout">reset_tls_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access` <a name="put_access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess"></a>

```python
def put_access(
  aud_tag: typing.List[str] = None,
  required: typing.Union[bool, IResolvable] = None,
  team_name: str = None
) -> None
```

###### `aud_tag`<sup>Optional</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess.parameter.audTag"></a>

- *Type:* typing.List[str]

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

###### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess.parameter.teamName"></a>

- *Type:* str

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

##### `put_ip_rules` <a name="put_ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules"></a>

```python
def put_ip_rules(
  value: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_bastion_mode` <a name="reset_bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetBastionMode"></a>

```python
def reset_bastion_mode() -> None
```

##### `reset_ca_pool` <a name="reset_ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetCaPool"></a>

```python
def reset_ca_pool() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_disable_chunked_encoding` <a name="reset_disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```python
def reset_disable_chunked_encoding() -> None
```

##### `reset_http2_origin` <a name="reset_http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttp2Origin"></a>

```python
def reset_http2_origin() -> None
```

##### `reset_http_host_header` <a name="reset_http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttpHostHeader"></a>

```python
def reset_http_host_header() -> None
```

##### `reset_ip_rules` <a name="reset_ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetIpRules"></a>

```python
def reset_ip_rules() -> None
```

##### `reset_keep_alive_connections` <a name="reset_keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveConnections"></a>

```python
def reset_keep_alive_connections() -> None
```

##### `reset_keep_alive_timeout` <a name="reset_keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```python
def reset_keep_alive_timeout() -> None
```

##### `reset_no_happy_eyeballs` <a name="reset_no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```python
def reset_no_happy_eyeballs() -> None
```

##### `reset_no_tls_verify` <a name="reset_no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoTlsVerify"></a>

```python
def reset_no_tls_verify() -> None
```

##### `reset_origin_server_name` <a name="reset_origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetOriginServerName"></a>

```python
def reset_origin_server_name() -> None
```

##### `reset_proxy_address` <a name="reset_proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyAddress"></a>

```python
def reset_proxy_address() -> None
```

##### `reset_proxy_port` <a name="reset_proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyPort"></a>

```python
def reset_proxy_port() -> None
```

##### `reset_proxy_type` <a name="reset_proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyType"></a>

```python
def reset_proxy_type() -> None
```

##### `reset_tcp_keep_alive` <a name="reset_tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTcpKeepAlive"></a>

```python
def reset_tcp_keep_alive() -> None
```

##### `reset_tls_timeout` <a name="reset_tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTlsTimeout"></a>

```python
def reset_tls_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.access">access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference">TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRules">ip_rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList">TunnelConfigConfigIngressRuleOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.accessInput">access_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionModeInput">bastion_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPoolInput">ca_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncodingInput">disable_chunked_encoding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2OriginInput">http2_origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeaderInput">http_host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRulesInput">ip_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnectionsInput">keep_alive_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeoutInput">keep_alive_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballsInput">no_happy_eyeballs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerifyInput">no_tls_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerNameInput">origin_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddressInput">proxy_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPortInput">proxy_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyTypeInput">proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAliveInput">tcp_keep_alive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeoutInput">tls_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionMode">bastion_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPool">ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncoding">disable_chunked_encoding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2Origin">http2_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeader">http_host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnections">keep_alive_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballs">no_happy_eyeballs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerify">no_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerName">origin_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddress">proxy_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyType">proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAlive">tcp_keep_alive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeout">tls_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.access"></a>

```python
access: TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference">TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference</a>

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRules"></a>

```python
ip_rules: TunnelConfigConfigIngressRuleOriginRequestIpRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList">TunnelConfigConfigIngressRuleOriginRequestIpRulesList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.accessInput"></a>

```python
access_input: TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

---

##### `bastion_mode_input`<sup>Optional</sup> <a name="bastion_mode_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionModeInput"></a>

```python
bastion_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_pool_input`<sup>Optional</sup> <a name="ca_pool_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPoolInput"></a>

```python
ca_pool_input: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: str
```

- *Type:* str

---

##### `disable_chunked_encoding_input`<sup>Optional</sup> <a name="disable_chunked_encoding_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```python
disable_chunked_encoding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http2_origin_input`<sup>Optional</sup> <a name="http2_origin_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2OriginInput"></a>

```python
http2_origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_host_header_input`<sup>Optional</sup> <a name="http_host_header_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```python
http_host_header_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRulesInput"></a>

```python
ip_rules_input: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]

---

##### `keep_alive_connections_input`<sup>Optional</sup> <a name="keep_alive_connections_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```python
keep_alive_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive_timeout_input`<sup>Optional</sup> <a name="keep_alive_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```python
keep_alive_timeout_input: str
```

- *Type:* str

---

##### `no_happy_eyeballs_input`<sup>Optional</sup> <a name="no_happy_eyeballs_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```python
no_happy_eyeballs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_tls_verify_input`<sup>Optional</sup> <a name="no_tls_verify_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```python
no_tls_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_server_name_input`<sup>Optional</sup> <a name="origin_server_name_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerNameInput"></a>

```python
origin_server_name_input: str
```

- *Type:* str

---

##### `proxy_address_input`<sup>Optional</sup> <a name="proxy_address_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddressInput"></a>

```python
proxy_address_input: str
```

- *Type:* str

---

##### `proxy_port_input`<sup>Optional</sup> <a name="proxy_port_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPortInput"></a>

```python
proxy_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_type_input`<sup>Optional</sup> <a name="proxy_type_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyTypeInput"></a>

```python
proxy_type_input: str
```

- *Type:* str

---

##### `tcp_keep_alive_input`<sup>Optional</sup> <a name="tcp_keep_alive_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```python
tcp_keep_alive_input: str
```

- *Type:* str

---

##### `tls_timeout_input`<sup>Optional</sup> <a name="tls_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```python
tls_timeout_input: str
```

- *Type:* str

---

##### `bastion_mode`<sup>Required</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionMode"></a>

```python
bastion_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

---

##### `disable_chunked_encoding`<sup>Required</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```python
disable_chunked_encoding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http2_origin`<sup>Required</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2Origin"></a>

```python
http2_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_host_header`<sup>Required</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeader"></a>

```python
http_host_header: str
```

- *Type:* str

---

##### `keep_alive_connections`<sup>Required</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnections"></a>

```python
keep_alive_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive_timeout`<sup>Required</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: str
```

- *Type:* str

---

##### `no_happy_eyeballs`<sup>Required</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballs"></a>

```python
no_happy_eyeballs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_tls_verify`<sup>Required</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerify"></a>

```python
no_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_server_name`<sup>Required</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerName"></a>

```python
origin_server_name: str
```

- *Type:* str

---

##### `proxy_address`<sup>Required</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

---

##### `proxy_port`<sup>Required</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_type`<sup>Required</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

---

##### `tcp_keep_alive`<sup>Required</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAlive"></a>

```python
tcp_keep_alive: str
```

- *Type:* str

---

##### `tls_timeout`<sup>Required</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeout"></a>

```python
tls_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

---


### TunnelConfigConfigIngressRuleOutputReference <a name="TunnelConfigConfigIngressRuleOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigIngressRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest">put_origin_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetOriginRequest">reset_origin_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_origin_request` <a name="put_origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest"></a>

```python
def put_origin_request(
  access: TunnelConfigConfigIngressRuleOriginRequestAccess = None,
  bastion_mode: typing.Union[bool, IResolvable] = None,
  ca_pool: str = None,
  connect_timeout: str = None,
  disable_chunked_encoding: typing.Union[bool, IResolvable] = None,
  http2_origin: typing.Union[bool, IResolvable] = None,
  http_host_header: str = None,
  ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRuleOriginRequestIpRules]] = None,
  keep_alive_connections: typing.Union[int, float] = None,
  keep_alive_timeout: str = None,
  no_happy_eyeballs: typing.Union[bool, IResolvable] = None,
  no_tls_verify: typing.Union[bool, IResolvable] = None,
  origin_server_name: str = None,
  proxy_address: str = None,
  proxy_port: typing.Union[int, float] = None,
  proxy_type: str = None,
  tcp_keep_alive: str = None,
  tls_timeout: str = None
) -> None
```

###### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.access"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

###### `bastion_mode`<sup>Optional</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.bastionMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

###### `ca_pool`<sup>Optional</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.caPool"></a>

- *Type:* str

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.connectTimeout"></a>

- *Type:* str

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

###### `disable_chunked_encoding`<sup>Optional</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.disableChunkedEncoding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

###### `http2_origin`<sup>Optional</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.http2Origin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

###### `http_host_header`<sup>Optional</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.httpHostHeader"></a>

- *Type:* str

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

###### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.ipRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules">TunnelConfigConfigIngressRuleOriginRequestIpRules</a>]]

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

###### `keep_alive_connections`<sup>Optional</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.keepAliveConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

###### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.keepAliveTimeout"></a>

- *Type:* str

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

###### `no_happy_eyeballs`<sup>Optional</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.noHappyEyeballs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

###### `no_tls_verify`<sup>Optional</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.noTlsVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

###### `origin_server_name`<sup>Optional</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.originServerName"></a>

- *Type:* str

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

###### `proxy_address`<sup>Optional</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.proxyAddress"></a>

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

###### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.proxyPort"></a>

- *Type:* typing.Union[int, float]

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

###### `proxy_type`<sup>Optional</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.proxyType"></a>

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

###### `tcp_keep_alive`<sup>Optional</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.tcpKeepAlive"></a>

- *Type:* str

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

###### `tls_timeout`<sup>Optional</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.tlsTimeout"></a>

- *Type:* str

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_origin_request` <a name="reset_origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetOriginRequest"></a>

```python
def reset_origin_request() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequest">origin_request</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference">TunnelConfigConfigIngressRuleOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequestInput">origin_request_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_request`<sup>Required</sup> <a name="origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequest"></a>

```python
origin_request: TunnelConfigConfigIngressRuleOriginRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference">TunnelConfigConfigIngressRuleOriginRequestOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `origin_request_input`<sup>Optional</sup> <a name="origin_request_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequestInput"></a>

```python
origin_request_input: TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TunnelConfigConfigIngressRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]

---


### TunnelConfigConfigOriginRequestAccessOutputReference <a name="TunnelConfigConfigOriginRequestAccessOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetAudTag">reset_aud_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetTeamName">reset_team_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aud_tag` <a name="reset_aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetAudTag"></a>

```python
def reset_aud_tag() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_team_name` <a name="reset_team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetTeamName"></a>

```python
def reset_team_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTagInput">aud_tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamNameInput">team_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTag">aud_tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aud_tag_input`<sup>Optional</sup> <a name="aud_tag_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTagInput"></a>

```python
aud_tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_name_input`<sup>Optional</sup> <a name="team_name_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamNameInput"></a>

```python
team_name_input: str
```

- *Type:* str

---

##### `aud_tag`<sup>Required</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTag"></a>

```python
aud_tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

---


### TunnelConfigConfigOriginRequestIpRulesList <a name="TunnelConfigConfigOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TunnelConfigConfigOriginRequestIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]

---


### TunnelConfigConfigOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput">allow_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow">allow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput"></a>

```python
allow_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow"></a>

```python
allow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TunnelConfigConfigOriginRequestIpRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]

---


### TunnelConfigConfigOriginRequestOutputReference <a name="TunnelConfigConfigOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOriginRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess">put_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules">put_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode">reset_bastion_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool">reset_ca_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding">reset_disable_chunked_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttp2Origin">reset_http2_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader">reset_http_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules">reset_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections">reset_keep_alive_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout">reset_keep_alive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs">reset_no_happy_eyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify">reset_no_tls_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName">reset_origin_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress">reset_proxy_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort">reset_proxy_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType">reset_proxy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive">reset_tcp_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout">reset_tls_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access` <a name="put_access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess"></a>

```python
def put_access(
  aud_tag: typing.List[str] = None,
  required: typing.Union[bool, IResolvable] = None,
  team_name: str = None
) -> None
```

###### `aud_tag`<sup>Optional</sup> <a name="aud_tag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess.parameter.audTag"></a>

- *Type:* typing.List[str]

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

###### `team_name`<sup>Optional</sup> <a name="team_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess.parameter.teamName"></a>

- *Type:* str

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

##### `put_ip_rules` <a name="put_ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules"></a>

```python
def put_ip_rules(
  value: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_bastion_mode` <a name="reset_bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode"></a>

```python
def reset_bastion_mode() -> None
```

##### `reset_ca_pool` <a name="reset_ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool"></a>

```python
def reset_ca_pool() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_disable_chunked_encoding` <a name="reset_disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```python
def reset_disable_chunked_encoding() -> None
```

##### `reset_http2_origin` <a name="reset_http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttp2Origin"></a>

```python
def reset_http2_origin() -> None
```

##### `reset_http_host_header` <a name="reset_http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader"></a>

```python
def reset_http_host_header() -> None
```

##### `reset_ip_rules` <a name="reset_ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules"></a>

```python
def reset_ip_rules() -> None
```

##### `reset_keep_alive_connections` <a name="reset_keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections"></a>

```python
def reset_keep_alive_connections() -> None
```

##### `reset_keep_alive_timeout` <a name="reset_keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```python
def reset_keep_alive_timeout() -> None
```

##### `reset_no_happy_eyeballs` <a name="reset_no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```python
def reset_no_happy_eyeballs() -> None
```

##### `reset_no_tls_verify` <a name="reset_no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify"></a>

```python
def reset_no_tls_verify() -> None
```

##### `reset_origin_server_name` <a name="reset_origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName"></a>

```python
def reset_origin_server_name() -> None
```

##### `reset_proxy_address` <a name="reset_proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress"></a>

```python
def reset_proxy_address() -> None
```

##### `reset_proxy_port` <a name="reset_proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort"></a>

```python
def reset_proxy_port() -> None
```

##### `reset_proxy_type` <a name="reset_proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType"></a>

```python
def reset_proxy_type() -> None
```

##### `reset_tcp_keep_alive` <a name="reset_tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive"></a>

```python
def reset_tcp_keep_alive() -> None
```

##### `reset_tls_timeout` <a name="reset_tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout"></a>

```python
def reset_tls_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.access">access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference">TunnelConfigConfigOriginRequestAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules">ip_rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.accessInput">access_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput">bastion_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput">ca_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput">disable_chunked_encoding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2OriginInput">http2_origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput">http_host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput">ip_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput">keep_alive_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput">keep_alive_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput">no_happy_eyeballs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput">no_tls_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput">origin_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput">proxy_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput">proxy_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput">proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput">tcp_keep_alive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput">tls_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode">bastion_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool">ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding">disable_chunked_encoding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2Origin">http2_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader">http_host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections">keep_alive_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs">no_happy_eyeballs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify">no_tls_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName">origin_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress">proxy_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort">proxy_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType">proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive">tcp_keep_alive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout">tls_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.access"></a>

```python
access: TunnelConfigConfigOriginRequestAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference">TunnelConfigConfigOriginRequestAccessOutputReference</a>

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules"></a>

```python
ip_rules: TunnelConfigConfigOriginRequestIpRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a>

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.accessInput"></a>

```python
access_input: TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

---

##### `bastion_mode_input`<sup>Optional</sup> <a name="bastion_mode_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput"></a>

```python
bastion_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_pool_input`<sup>Optional</sup> <a name="ca_pool_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput"></a>

```python
ca_pool_input: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: str
```

- *Type:* str

---

##### `disable_chunked_encoding_input`<sup>Optional</sup> <a name="disable_chunked_encoding_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```python
disable_chunked_encoding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http2_origin_input`<sup>Optional</sup> <a name="http2_origin_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2OriginInput"></a>

```python
http2_origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_host_header_input`<sup>Optional</sup> <a name="http_host_header_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```python
http_host_header_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput"></a>

```python
ip_rules_input: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]

---

##### `keep_alive_connections_input`<sup>Optional</sup> <a name="keep_alive_connections_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```python
keep_alive_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive_timeout_input`<sup>Optional</sup> <a name="keep_alive_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```python
keep_alive_timeout_input: str
```

- *Type:* str

---

##### `no_happy_eyeballs_input`<sup>Optional</sup> <a name="no_happy_eyeballs_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```python
no_happy_eyeballs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_tls_verify_input`<sup>Optional</sup> <a name="no_tls_verify_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```python
no_tls_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_server_name_input`<sup>Optional</sup> <a name="origin_server_name_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput"></a>

```python
origin_server_name_input: str
```

- *Type:* str

---

##### `proxy_address_input`<sup>Optional</sup> <a name="proxy_address_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput"></a>

```python
proxy_address_input: str
```

- *Type:* str

---

##### `proxy_port_input`<sup>Optional</sup> <a name="proxy_port_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput"></a>

```python
proxy_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_type_input`<sup>Optional</sup> <a name="proxy_type_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput"></a>

```python
proxy_type_input: str
```

- *Type:* str

---

##### `tcp_keep_alive_input`<sup>Optional</sup> <a name="tcp_keep_alive_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```python
tcp_keep_alive_input: str
```

- *Type:* str

---

##### `tls_timeout_input`<sup>Optional</sup> <a name="tls_timeout_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```python
tls_timeout_input: str
```

- *Type:* str

---

##### `bastion_mode`<sup>Required</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode"></a>

```python
bastion_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

---

##### `disable_chunked_encoding`<sup>Required</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```python
disable_chunked_encoding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http2_origin`<sup>Required</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2Origin"></a>

```python
http2_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_host_header`<sup>Required</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader"></a>

```python
http_host_header: str
```

- *Type:* str

---

##### `keep_alive_connections`<sup>Required</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections"></a>

```python
keep_alive_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive_timeout`<sup>Required</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: str
```

- *Type:* str

---

##### `no_happy_eyeballs`<sup>Required</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs"></a>

```python
no_happy_eyeballs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_tls_verify`<sup>Required</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify"></a>

```python
no_tls_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_server_name`<sup>Required</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName"></a>

```python
origin_server_name: str
```

- *Type:* str

---

##### `proxy_address`<sup>Required</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress"></a>

```python
proxy_address: str
```

- *Type:* str

---

##### `proxy_port`<sup>Required</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort"></a>

```python
proxy_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_type`<sup>Required</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

---

##### `tcp_keep_alive`<sup>Required</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive"></a>

```python
tcp_keep_alive: str
```

- *Type:* str

---

##### `tls_timeout`<sup>Required</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout"></a>

```python
tls_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---


### TunnelConfigConfigOutputReference <a name="TunnelConfigConfigOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule">put_ingress_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest">put_origin_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting">put_warp_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetOriginRequest">reset_origin_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetWarpRouting">reset_warp_routing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingress_rule` <a name="put_ingress_rule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule"></a>

```python
def put_ingress_rule(
  value: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]

---

##### `put_origin_request` <a name="put_origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest"></a>

```python
def put_origin_request(
  access: TunnelConfigConfigOriginRequestAccess = None,
  bastion_mode: typing.Union[bool, IResolvable] = None,
  ca_pool: str = None,
  connect_timeout: str = None,
  disable_chunked_encoding: typing.Union[bool, IResolvable] = None,
  http2_origin: typing.Union[bool, IResolvable] = None,
  http_host_header: str = None,
  ip_rules: typing.Union[IResolvable, typing.List[TunnelConfigConfigOriginRequestIpRules]] = None,
  keep_alive_connections: typing.Union[int, float] = None,
  keep_alive_timeout: str = None,
  no_happy_eyeballs: typing.Union[bool, IResolvable] = None,
  no_tls_verify: typing.Union[bool, IResolvable] = None,
  origin_server_name: str = None,
  proxy_address: str = None,
  proxy_port: typing.Union[int, float] = None,
  proxy_type: str = None,
  tcp_keep_alive: str = None,
  tls_timeout: str = None
) -> None
```

###### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.access"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

###### `bastion_mode`<sup>Optional</sup> <a name="bastion_mode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.bastionMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

###### `ca_pool`<sup>Optional</sup> <a name="ca_pool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.caPool"></a>

- *Type:* str

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.connectTimeout"></a>

- *Type:* str

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

###### `disable_chunked_encoding`<sup>Optional</sup> <a name="disable_chunked_encoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.disableChunkedEncoding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

###### `http2_origin`<sup>Optional</sup> <a name="http2_origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.http2Origin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

###### `http_host_header`<sup>Optional</sup> <a name="http_host_header" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.httpHostHeader"></a>

- *Type:* str

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

###### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.ipRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>]]

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

###### `keep_alive_connections`<sup>Optional</sup> <a name="keep_alive_connections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.keepAliveConnections"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

###### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.keepAliveTimeout"></a>

- *Type:* str

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

###### `no_happy_eyeballs`<sup>Optional</sup> <a name="no_happy_eyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.noHappyEyeballs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

###### `no_tls_verify`<sup>Optional</sup> <a name="no_tls_verify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.noTlsVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

###### `origin_server_name`<sup>Optional</sup> <a name="origin_server_name" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.originServerName"></a>

- *Type:* str

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

###### `proxy_address`<sup>Optional</sup> <a name="proxy_address" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.proxyAddress"></a>

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

###### `proxy_port`<sup>Optional</sup> <a name="proxy_port" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.proxyPort"></a>

- *Type:* typing.Union[int, float]

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

###### `proxy_type`<sup>Optional</sup> <a name="proxy_type" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.proxyType"></a>

- *Type:* str

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

###### `tcp_keep_alive`<sup>Optional</sup> <a name="tcp_keep_alive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.tcpKeepAlive"></a>

- *Type:* str

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

###### `tls_timeout`<sup>Optional</sup> <a name="tls_timeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.tlsTimeout"></a>

- *Type:* str

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

##### `put_warp_routing` <a name="put_warp_routing" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting"></a>

```python
def put_warp_routing(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/tunnel_config#enabled TunnelConfigA#enabled}

---

##### `reset_origin_request` <a name="reset_origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetOriginRequest"></a>

```python
def reset_origin_request() -> None
```

##### `reset_warp_routing` <a name="reset_warp_routing" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetWarpRouting"></a>

```python
def reset_warp_routing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRule">ingress_rule</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequest">origin_request</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRouting">warp_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRuleInput">ingress_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequestInput">origin_request_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRoutingInput">warp_routing_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_rule`<sup>Required</sup> <a name="ingress_rule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRule"></a>

```python
ingress_rule: TunnelConfigConfigIngressRuleList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a>

---

##### `origin_request`<sup>Required</sup> <a name="origin_request" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequest"></a>

```python
origin_request: TunnelConfigConfigOriginRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a>

---

##### `warp_routing`<sup>Required</sup> <a name="warp_routing" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRouting"></a>

```python
warp_routing: TunnelConfigConfigWarpRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a>

---

##### `ingress_rule_input`<sup>Optional</sup> <a name="ingress_rule_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRuleInput"></a>

```python
ingress_rule_input: typing.Union[IResolvable, typing.List[TunnelConfigConfigIngressRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>]]

---

##### `origin_request_input`<sup>Optional</sup> <a name="origin_request_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequestInput"></a>

```python
origin_request_input: TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `warp_routing_input`<sup>Optional</sup> <a name="warp_routing_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRoutingInput"></a>

```python
warp_routing_input: TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---


### TunnelConfigConfigWarpRoutingOutputReference <a name="TunnelConfigConfigWarpRoutingOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import tunnel_config

tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue"></a>

```python
internal_value: TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---



