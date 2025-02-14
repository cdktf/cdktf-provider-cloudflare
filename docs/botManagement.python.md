# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktf/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktf/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  ai_bots_protection: str = None,
  auto_update_model: typing.Union[bool, IResolvable] = None,
  enable_js: typing.Union[bool, IResolvable] = None,
  fight_mode: typing.Union[bool, IResolvable] = None,
  optimize_wordpress: typing.Union[bool, IResolvable] = None,
  sbfm_definitely_automated: str = None,
  sbfm_likely_automated: str = None,
  sbfm_static_resource_protection: typing.Union[bool, IResolvable] = None,
  sbfm_verified_bots: str = None,
  suppress_session_score: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.aiBotsProtection">ai_bots_protection</a></code> | <code>str</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel">auto_update_model</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs">enable_js</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode">fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress">optimize_wordpress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated">sbfm_definitely_automated</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated">sbfm_likely_automated</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection">sbfm_static_resource_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots">sbfm_verified_bots</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore">suppress_session_score</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `ai_bots_protection`<sup>Optional</sup> <a name="ai_bots_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.aiBotsProtection"></a>

- *Type:* str

Enable rule to block AI Scrapers and Crawlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `auto_update_model`<sup>Optional</sup> <a name="auto_update_model" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `enable_js`<sup>Optional</sup> <a name="enable_js" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fight_mode`<sup>Optional</sup> <a name="fight_mode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `optimize_wordpress`<sup>Optional</sup> <a name="optimize_wordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfm_definitely_automated`<sup>Optional</sup> <a name="sbfm_definitely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated"></a>

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfm_likely_automated`<sup>Optional</sup> <a name="sbfm_likely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated"></a>

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfm_static_resource_protection`<sup>Optional</sup> <a name="sbfm_static_resource_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfm_verified_bots`<sup>Optional</sup> <a name="sbfm_verified_bots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots"></a>

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppress_session_score`<sup>Optional</sup> <a name="suppress_session_score" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection">reset_ai_bots_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">reset_auto_update_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs">reset_enable_js</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode">reset_fight_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">reset_optimize_wordpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">reset_sbfm_definitely_automated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">reset_sbfm_likely_automated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">reset_sbfm_static_resource_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">reset_sbfm_verified_bots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">reset_suppress_session_score</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ai_bots_protection` <a name="reset_ai_bots_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection"></a>

```python
def reset_ai_bots_protection() -> None
```

##### `reset_auto_update_model` <a name="reset_auto_update_model" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```python
def reset_auto_update_model() -> None
```

##### `reset_enable_js` <a name="reset_enable_js" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```python
def reset_enable_js() -> None
```

##### `reset_fight_mode` <a name="reset_fight_mode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```python
def reset_fight_mode() -> None
```

##### `reset_optimize_wordpress` <a name="reset_optimize_wordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```python
def reset_optimize_wordpress() -> None
```

##### `reset_sbfm_definitely_automated` <a name="reset_sbfm_definitely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```python
def reset_sbfm_definitely_automated() -> None
```

##### `reset_sbfm_likely_automated` <a name="reset_sbfm_likely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```python
def reset_sbfm_likely_automated() -> None
```

##### `reset_sbfm_static_resource_protection` <a name="reset_sbfm_static_resource_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```python
def reset_sbfm_static_resource_protection() -> None
```

##### `reset_sbfm_verified_bots` <a name="reset_sbfm_verified_bots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```python
def reset_sbfm_verified_bots() -> None
```

##### `reset_suppress_session_score` <a name="reset_suppress_session_score" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```python
def reset_suppress_session_score() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BotManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration">stale_zone_configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">using_latest_model</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput">ai_bots_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">auto_update_model_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">enable_js_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">fight_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">optimize_wordpress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">sbfm_definitely_automated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">sbfm_likely_automated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">sbfm_static_resource_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">sbfm_verified_bots_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">suppress_session_score_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection">ai_bots_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">auto_update_model</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs">enable_js</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode">fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">optimize_wordpress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">sbfm_definitely_automated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">sbfm_likely_automated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">sbfm_static_resource_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">sbfm_verified_bots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">suppress_session_score</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stale_zone_configuration`<sup>Required</sup> <a name="stale_zone_configuration" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration"></a>

```python
stale_zone_configuration: BotManagementStaleZoneConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a>

---

##### `using_latest_model`<sup>Required</sup> <a name="using_latest_model" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```python
using_latest_model: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ai_bots_protection_input`<sup>Optional</sup> <a name="ai_bots_protection_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput"></a>

```python
ai_bots_protection_input: str
```

- *Type:* str

---

##### `auto_update_model_input`<sup>Optional</sup> <a name="auto_update_model_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```python
auto_update_model_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_js_input`<sup>Optional</sup> <a name="enable_js_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```python
enable_js_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fight_mode_input`<sup>Optional</sup> <a name="fight_mode_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```python
fight_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimize_wordpress_input`<sup>Optional</sup> <a name="optimize_wordpress_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```python
optimize_wordpress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sbfm_definitely_automated_input`<sup>Optional</sup> <a name="sbfm_definitely_automated_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```python
sbfm_definitely_automated_input: str
```

- *Type:* str

---

##### `sbfm_likely_automated_input`<sup>Optional</sup> <a name="sbfm_likely_automated_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```python
sbfm_likely_automated_input: str
```

- *Type:* str

---

##### `sbfm_static_resource_protection_input`<sup>Optional</sup> <a name="sbfm_static_resource_protection_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```python
sbfm_static_resource_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sbfm_verified_bots_input`<sup>Optional</sup> <a name="sbfm_verified_bots_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```python
sbfm_verified_bots_input: str
```

- *Type:* str

---

##### `suppress_session_score_input`<sup>Optional</sup> <a name="suppress_session_score_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```python
suppress_session_score_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `ai_bots_protection`<sup>Required</sup> <a name="ai_bots_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection"></a>

```python
ai_bots_protection: str
```

- *Type:* str

---

##### `auto_update_model`<sup>Required</sup> <a name="auto_update_model" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```python
auto_update_model: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_js`<sup>Required</sup> <a name="enable_js" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```python
enable_js: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fight_mode`<sup>Required</sup> <a name="fight_mode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```python
fight_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimize_wordpress`<sup>Required</sup> <a name="optimize_wordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```python
optimize_wordpress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sbfm_definitely_automated`<sup>Required</sup> <a name="sbfm_definitely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```python
sbfm_definitely_automated: str
```

- *Type:* str

---

##### `sbfm_likely_automated`<sup>Required</sup> <a name="sbfm_likely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```python
sbfm_likely_automated: str
```

- *Type:* str

---

##### `sbfm_static_resource_protection`<sup>Required</sup> <a name="sbfm_static_resource_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```python
sbfm_static_resource_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sbfm_verified_bots`<sup>Required</sup> <a name="sbfm_verified_bots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```python
sbfm_verified_bots: str
```

- *Type:* str

---

##### `suppress_session_score`<sup>Required</sup> <a name="suppress_session_score" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```python
suppress_session_score: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  ai_bots_protection: str = None,
  auto_update_model: typing.Union[bool, IResolvable] = None,
  enable_js: typing.Union[bool, IResolvable] = None,
  fight_mode: typing.Union[bool, IResolvable] = None,
  optimize_wordpress: typing.Union[bool, IResolvable] = None,
  sbfm_definitely_automated: str = None,
  sbfm_likely_automated: str = None,
  sbfm_static_resource_protection: typing.Union[bool, IResolvable] = None,
  sbfm_verified_bots: str = None,
  suppress_session_score: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection">ai_bots_protection</a></code> | <code>str</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">auto_update_model</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">enable_js</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">fight_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">optimize_wordpress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">sbfm_definitely_automated</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">sbfm_likely_automated</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">sbfm_static_resource_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">sbfm_verified_bots</a></code> | <code>str</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">suppress_session_score</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `ai_bots_protection`<sup>Optional</sup> <a name="ai_bots_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection"></a>

```python
ai_bots_protection: str
```

- *Type:* str

Enable rule to block AI Scrapers and Crawlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `auto_update_model`<sup>Optional</sup> <a name="auto_update_model" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```python
auto_update_model: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `enable_js`<sup>Optional</sup> <a name="enable_js" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```python
enable_js: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fight_mode`<sup>Optional</sup> <a name="fight_mode" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```python
fight_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `optimize_wordpress`<sup>Optional</sup> <a name="optimize_wordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```python
optimize_wordpress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfm_definitely_automated`<sup>Optional</sup> <a name="sbfm_definitely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```python
sbfm_definitely_automated: str
```

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfm_likely_automated`<sup>Optional</sup> <a name="sbfm_likely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```python
sbfm_likely_automated: str
```

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfm_static_resource_protection`<sup>Optional</sup> <a name="sbfm_static_resource_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```python
sbfm_static_resource_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfm_verified_bots`<sup>Optional</sup> <a name="sbfm_verified_bots" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```python
sbfm_verified_bots: str
```

- *Type:* str

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppress_session_score`<sup>Optional</sup> <a name="suppress_session_score" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```python
suppress_session_score: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

### BotManagementStaleZoneConfiguration <a name="BotManagementStaleZoneConfiguration" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagementStaleZoneConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### BotManagementStaleZoneConfigurationOutputReference <a name="BotManagementStaleZoneConfigurationOutputReference" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import bot_management

botManagement.BotManagementStaleZoneConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode">fight_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">optimize_wordpress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">sbfm_definitely_automated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">sbfm_likely_automated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">sbfm_static_resource_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">sbfm_verified_bots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">suppress_session_score</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fight_mode`<sup>Required</sup> <a name="fight_mode" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```python
fight_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `optimize_wordpress`<sup>Required</sup> <a name="optimize_wordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```python
optimize_wordpress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sbfm_definitely_automated`<sup>Required</sup> <a name="sbfm_definitely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```python
sbfm_definitely_automated: str
```

- *Type:* str

---

##### `sbfm_likely_automated`<sup>Required</sup> <a name="sbfm_likely_automated" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```python
sbfm_likely_automated: str
```

- *Type:* str

---

##### `sbfm_static_resource_protection`<sup>Required</sup> <a name="sbfm_static_resource_protection" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```python
sbfm_static_resource_protection: str
```

- *Type:* str

---

##### `sbfm_verified_bots`<sup>Required</sup> <a name="sbfm_verified_bots" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```python
sbfm_verified_bots: str
```

- *Type:* str

---

##### `suppress_session_score`<sup>Required</sup> <a name="suppress_session_score" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```python
suppress_session_score: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BotManagementStaleZoneConfiguration
```

- *Type:* <a href="#@cdktf/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a>

---



