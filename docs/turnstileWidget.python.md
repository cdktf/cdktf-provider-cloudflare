# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktf/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidget(
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
  domains: typing.List[str],
  mode: str,
  name: str,
  bot_fight_mode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  offlabel: typing.Union[bool, IResolvable] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains">domains</a></code> | <code>typing.List[str]</code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name">name</a></code> | <code>str</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode">bot_fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>str</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel">offlabel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this widget can be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains"></a>

- *Type:* typing.List[str]

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode"></a>

- *Type:* str

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name"></a>

- *Type:* str

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `bot_fight_mode`<sup>Optional</sup> <a name="bot_fight_mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* str

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region"></a>

- *Type:* str

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">reset_bot_fight_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">reset_offlabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_bot_fight_mode` <a name="reset_bot_fight_mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```python
def reset_bot_fight_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_offlabel` <a name="reset_offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```python
def reset_offlabel() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TurnstileWidget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">bot_fight_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">offlabel_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">bot_fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">offlabel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bot_fight_mode_input`<sup>Optional</sup> <a name="bot_fight_mode_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```python
bot_fight_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `offlabel_input`<sup>Optional</sup> <a name="offlabel_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```python
offlabel_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bot_fight_mode`<sup>Required</sup> <a name="bot_fight_mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```python
bot_fight_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```python
offlabel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import turnstile_widget

turnstileWidget.TurnstileWidgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  domains: typing.List[str],
  mode: str,
  name: str,
  bot_fight_mode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  offlabel: typing.Union[bool, IResolvable] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">mode</a></code> | <code>str</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">name</a></code> | <code>str</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">bot_fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id">id</a></code> | <code>str</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">offlabel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">region</a></code> | <code>str</code> | Region where this widget can be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `bot_fight_mode`<sup>Optional</sup> <a name="bot_fight_mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```python
bot_fight_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```python
offlabel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---



