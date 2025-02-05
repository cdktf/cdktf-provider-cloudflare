# `teamsRule` Submodule <a name="`teamsRule` Submodule" id="@cdktf/provider-cloudflare.teamsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsRule <a name="TeamsRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule cloudflare_teams_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRule(scope Construct, id *string, config TeamsRuleConfig) TeamsRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig">TeamsRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig">TeamsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings">PutRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings">ResetRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRuleSettings` <a name="PutRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings"></a>

```go
func PutRuleSettings(value TeamsRuleRuleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture"></a>

```go
func ResetDevicePosture()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetRuleSettings` <a name="ResetRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings"></a>

```go
func ResetRuleSettings()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic"></a>

```go
func ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.TeamsRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.TeamsRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.TeamsRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.TeamsRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamsRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TeamsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings">RuleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput">DevicePostureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput">FiltersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput">PrecedenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput">RuleSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput">TrafficInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture">DevicePosture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters">Filters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence">Precedence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic">Traffic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RuleSettings`<sup>Required</sup> <a name="RuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings"></a>

```go
func RuleSettings() TeamsRuleRuleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput"></a>

```go
func DevicePostureInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput"></a>

```go
func FiltersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput"></a>

```go
func PrecedenceInput() *f64
```

- *Type:* *f64

---

##### `RuleSettingsInput`<sup>Optional</sup> <a name="RuleSettingsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput"></a>

```go
func RuleSettingsInput() TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput"></a>

```go
func TrafficInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture"></a>

```go
func DevicePosture() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters"></a>

```go
func Filters() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence"></a>

```go
func Precedence() *f64
```

- *Type:* *f64

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic"></a>

```go
func Traffic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsRuleConfig <a name="TeamsRuleConfig" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Action: *string,
	Description: *string,
	Name: *string,
	Precedence: *f64,
	DevicePosture: *string,
	Enabled: interface{},
	Filters: *[]*string,
	Id: *string,
	Identity: *string,
	RuleSettings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettings,
	Traffic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action">Action</a></code> | <code>*string</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence">Precedence</a></code> | <code>*f64</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture">DevicePosture</a></code> | <code>*string</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters">Filters</a></code> | <code>*[]*string</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity">Identity</a></code> | <code>*string</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings">RuleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic">Traffic</a></code> | <code>*string</code> | The wirefilter expression to be used for traffic matching. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#account_id TeamsRule#account_id}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#description TeamsRule#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#name TeamsRule#name}

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence"></a>

```go
Precedence *f64
```

- *Type:* *f64

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#precedence TeamsRule#precedence}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture"></a>

```go
DevicePosture *string
```

- *Type:* *string

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#device_posture TeamsRule#device_posture}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters"></a>

```go
Filters *[]*string
```

- *Type:* *[]*string

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#filters TeamsRule#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#identity TeamsRule#identity}

---

##### `RuleSettings`<sup>Optional</sup> <a name="RuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings"></a>

```go
RuleSettings TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic"></a>

```go
Traffic *string
```

- *Type:* *string

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#traffic TeamsRule#traffic}

---

### TeamsRuleRuleSettings <a name="TeamsRuleRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettings {
	AddHeaders: *map[string]*string,
	AllowChildBypass: interface{},
	AuditSsh: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsAuditSsh,
	BisoAdminControls: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsBisoAdminControls,
	BlockPageEnabled: interface{},
	BlockPageReason: *string,
	BypassParentRule: interface{},
	CheckSession: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsCheckSession,
	DnsResolvers: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsDnsResolvers,
	Egress: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsEgress,
	IgnoreCnameCategoryMatches: interface{},
	InsecureDisableDnssecValidation: interface{},
	IpCategories: interface{},
	L4Override: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsL4Override,
	NotificationSettings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsNotificationSettings,
	OverrideHost: *string,
	OverrideIps: *[]*string,
	PayloadLog: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsPayloadLog,
	ResolveDnsInternally: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally,
	ResolveDnsThroughCloudflare: interface{},
	UntrustedCert: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.teamsRule.TeamsRuleRuleSettingsUntrustedCert,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders">AddHeaders</a></code> | <code>*map[string]*string</code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass">AllowChildBypass</a></code> | <code>interface{}</code> | Allow parent MSP accounts to enable bypass their children's rules. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh">AuditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | audit_ssh block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls">BisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled">BlockPageEnabled</a></code> | <code>interface{}</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason">BlockPageReason</a></code> | <code>*string</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule">BypassParentRule</a></code> | <code>interface{}</code> | Allow child MSP accounts to bypass their parent's rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession">CheckSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.dnsResolvers">DnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | dns_resolvers block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ignoreCnameCategoryMatches">IgnoreCnameCategoryMatches</a></code> | <code>interface{}</code> | Set to true, to ignore the category matches at CNAME domains in a response. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation">InsecureDisableDnssecValidation</a></code> | <code>interface{}</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories">IpCategories</a></code> | <code>interface{}</code> | Turns on IP category based filter on dns if the rule contains dns category checks. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override">L4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost">OverrideHost</a></code> | <code>*string</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps">OverrideIps</a></code> | <code>*[]*string</code> | The IPs to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsInternally">ResolveDnsInternally</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a></code> | resolve_dns_internally block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsThroughCloudflare">ResolveDnsThroughCloudflare</a></code> | <code>interface{}</code> | Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert">UntrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | untrusted_cert block. |

---

##### `AddHeaders`<sup>Optional</sup> <a name="AddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders"></a>

```go
AddHeaders *map[string]*string
```

- *Type:* *map[string]*string

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#add_headers TeamsRule#add_headers}

---

##### `AllowChildBypass`<sup>Optional</sup> <a name="AllowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass"></a>

```go
AllowChildBypass interface{}
```

- *Type:* interface{}

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#allow_child_bypass TeamsRule#allow_child_bypass}

---

##### `AuditSsh`<sup>Optional</sup> <a name="AuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh"></a>

```go
AuditSsh TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#audit_ssh TeamsRule#audit_ssh}

---

##### `BisoAdminControls`<sup>Optional</sup> <a name="BisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls"></a>

```go
BisoAdminControls TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

##### `BlockPageEnabled`<sup>Optional</sup> <a name="BlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled"></a>

```go
BlockPageEnabled interface{}
```

- *Type:* interface{}

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

##### `BlockPageReason`<sup>Optional</sup> <a name="BlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason"></a>

```go
BlockPageReason *string
```

- *Type:* *string

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

##### `BypassParentRule`<sup>Optional</sup> <a name="BypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule"></a>

```go
BypassParentRule interface{}
```

- *Type:* interface{}

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#bypass_parent_rule TeamsRule#bypass_parent_rule}

---

##### `CheckSession`<sup>Optional</sup> <a name="CheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession"></a>

```go
CheckSession TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#check_session TeamsRule#check_session}

---

##### `DnsResolvers`<sup>Optional</sup> <a name="DnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.dnsResolvers"></a>

```go
DnsResolvers TeamsRuleRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

dns_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#dns_resolvers TeamsRule#dns_resolvers}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress"></a>

```go
Egress TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#egress TeamsRule#egress}

---

##### `IgnoreCnameCategoryMatches`<sup>Optional</sup> <a name="IgnoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ignoreCnameCategoryMatches"></a>

```go
IgnoreCnameCategoryMatches interface{}
```

- *Type:* interface{}

Set to true, to ignore the category matches at CNAME domains in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ignore_cname_category_matches TeamsRule#ignore_cname_category_matches}

---

##### `InsecureDisableDnssecValidation`<sup>Optional</sup> <a name="InsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation"></a>

```go
InsecureDisableDnssecValidation interface{}
```

- *Type:* interface{}

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

##### `IpCategories`<sup>Optional</sup> <a name="IpCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories"></a>

```go
IpCategories interface{}
```

- *Type:* interface{}

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ip_categories TeamsRule#ip_categories}

---

##### `L4Override`<sup>Optional</sup> <a name="L4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override"></a>

```go
L4Override TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#l4override TeamsRule#l4override}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.notificationSettings"></a>

```go
NotificationSettings TeamsRuleRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#notification_settings TeamsRule#notification_settings}

---

##### `OverrideHost`<sup>Optional</sup> <a name="OverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost"></a>

```go
OverrideHost *string
```

- *Type:* *string

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#override_host TeamsRule#override_host}

---

##### `OverrideIps`<sup>Optional</sup> <a name="OverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps"></a>

```go
OverrideIps *[]*string
```

- *Type:* *[]*string

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#override_ips TeamsRule#override_ips}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog"></a>

```go
PayloadLog TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#payload_log TeamsRule#payload_log}

---

##### `ResolveDnsInternally`<sup>Optional</sup> <a name="ResolveDnsInternally" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsInternally"></a>

```go
ResolveDnsInternally TeamsRuleRuleSettingsResolveDnsInternally
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a>

resolve_dns_internally block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#resolve_dns_internally TeamsRule#resolve_dns_internally}

---

##### `ResolveDnsThroughCloudflare`<sup>Optional</sup> <a name="ResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsThroughCloudflare"></a>

```go
ResolveDnsThroughCloudflare interface{}
```

- *Type:* interface{}

Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#resolve_dns_through_cloudflare TeamsRule#resolve_dns_through_cloudflare}

---

##### `UntrustedCert`<sup>Optional</sup> <a name="UntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert"></a>

```go
UntrustedCert TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#untrusted_cert TeamsRule#untrusted_cert}

---

### TeamsRuleRuleSettingsAuditSsh <a name="TeamsRuleRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsAuditSsh {
	CommandLogging: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging">CommandLogging</a></code> | <code>interface{}</code> | Log all SSH commands. |

---

##### `CommandLogging`<sup>Required</sup> <a name="CommandLogging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging"></a>

```go
CommandLogging interface{}
```

- *Type:* interface{}

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#command_logging TeamsRule#command_logging}

---

### TeamsRuleRuleSettingsBisoAdminControls <a name="TeamsRuleRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsBisoAdminControls {
	Copy: *string,
	DisableClipboardRedirection: interface{},
	DisableCopyPaste: interface{},
	DisableDownload: interface{},
	DisableKeyboard: interface{},
	DisablePrinting: interface{},
	DisableUpload: interface{},
	Download: *string,
	Keyboard: *string,
	Paste: *string,
	Printing: *string,
	Upload: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.copy">Copy</a></code> | <code>*string</code> | Configure whether copy is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableClipboardRedirection">DisableClipboardRedirection</a></code> | <code>interface{}</code> | Disable clipboard redirection. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste">DisableCopyPaste</a></code> | <code>interface{}</code> | Disable copy-paste. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload">DisableDownload</a></code> | <code>interface{}</code> | Disable download. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard">DisableKeyboard</a></code> | <code>interface{}</code> | Disable keyboard usage. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting">DisablePrinting</a></code> | <code>interface{}</code> | Disable printing. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload">DisableUpload</a></code> | <code>interface{}</code> | Disable upload. Only applies when version == v1. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.download">Download</a></code> | <code>*string</code> | Configure whether downloading enabled or not. When absent, downloading is enabled. Only applies when version == v2. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.keyboard">Keyboard</a></code> | <code>*string</code> | Configure whether keyboard usage is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.paste">Paste</a></code> | <code>*string</code> | Configure whether pasting is enabled or not. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.printing">Printing</a></code> | <code>*string</code> | Configure whether printing is enabled or not. When absent, printing is enabled. Only applies when version == v2. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.upload">Upload</a></code> | <code>*string</code> | Configure whether uploading is enabled or not. When absent, uploading is enabled. Only applies when version == v2. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.version">Version</a></code> | <code>*string</code> | Indicates which version (v1 or v2) of the browser isolation controls should apply. Defaults to `v1`. |

---

##### `Copy`<sup>Optional</sup> <a name="Copy" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.copy"></a>

```go
Copy *string
```

- *Type:* *string

Configure whether copy is enabled or not.

When set with 'remote_only', copying isolated content from the remote browser to the user's local clipboard is disabled. When absent, copy is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#copy TeamsRule#copy}

---

##### `DisableClipboardRedirection`<sup>Optional</sup> <a name="DisableClipboardRedirection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableClipboardRedirection"></a>

```go
DisableClipboardRedirection interface{}
```

- *Type:* interface{}

Disable clipboard redirection. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_clipboard_redirection TeamsRule#disable_clipboard_redirection}

---

##### `DisableCopyPaste`<sup>Optional</sup> <a name="DisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste"></a>

```go
DisableCopyPaste interface{}
```

- *Type:* interface{}

Disable copy-paste. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

##### `DisableDownload`<sup>Optional</sup> <a name="DisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload"></a>

```go
DisableDownload interface{}
```

- *Type:* interface{}

Disable download. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_download TeamsRule#disable_download}

---

##### `DisableKeyboard`<sup>Optional</sup> <a name="DisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```go
DisableKeyboard interface{}
```

- *Type:* interface{}

Disable keyboard usage. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

##### `DisablePrinting`<sup>Optional</sup> <a name="DisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```go
DisablePrinting interface{}
```

- *Type:* interface{}

Disable printing. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_printing TeamsRule#disable_printing}

---

##### `DisableUpload`<sup>Optional</sup> <a name="DisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload"></a>

```go
DisableUpload interface{}
```

- *Type:* interface{}

Disable upload. Only applies when version == v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#disable_upload TeamsRule#disable_upload}

---

##### `Download`<sup>Optional</sup> <a name="Download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.download"></a>

```go
Download *string
```

- *Type:* *string

Configure whether downloading enabled or not. When absent, downloading is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#download TeamsRule#download}

---

##### `Keyboard`<sup>Optional</sup> <a name="Keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.keyboard"></a>

```go
Keyboard *string
```

- *Type:* *string

Configure whether keyboard usage is enabled or not.

When absent, keyboard usage is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#keyboard TeamsRule#keyboard}

---

##### `Paste`<sup>Optional</sup> <a name="Paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.paste"></a>

```go
Paste *string
```

- *Type:* *string

Configure whether pasting is enabled or not.

When set with 'remote_only', pasting content from the user's local clipboard into isolated pages is disabled. When absent, paste is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#paste TeamsRule#paste}

---

##### `Printing`<sup>Optional</sup> <a name="Printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.printing"></a>

```go
Printing *string
```

- *Type:* *string

Configure whether printing is enabled or not. When absent, printing is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#printing TeamsRule#printing}

---

##### `Upload`<sup>Optional</sup> <a name="Upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.upload"></a>

```go
Upload *string
```

- *Type:* *string

Configure whether uploading is enabled or not. When absent, uploading is enabled. Only applies when version == v2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#upload TeamsRule#upload}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.version"></a>

```go
Version *string
```

- *Type:* *string

Indicates which version (v1 or v2) of the browser isolation controls should apply. Defaults to `v1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#version TeamsRule#version}

---

### TeamsRuleRuleSettingsCheckSession <a name="TeamsRuleRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsCheckSession {
	Duration: *string,
	Enforce: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration">Duration</a></code> | <code>*string</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce">Enforce</a></code> | <code>interface{}</code> | Enable session enforcement for this rule. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#duration TeamsRule#duration}

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce"></a>

```go
Enforce interface{}
```

- *Type:* interface{}

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#enforce TeamsRule#enforce}

---

### TeamsRuleRuleSettingsDnsResolvers <a name="TeamsRuleRuleSettingsDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsDnsResolvers {
	Ipv4: interface{},
	Ipv6: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv4">Ipv4</a></code> | <code>interface{}</code> | ipv4 block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | ipv6 block. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv4"></a>

```go
Ipv4 interface{}
```

- *Type:* interface{}

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv6"></a>

```go
Ipv6 interface{}
```

- *Type:* interface{}

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

### TeamsRuleRuleSettingsDnsResolversIpv4 <a name="TeamsRuleRuleSettingsDnsResolversIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsDnsResolversIpv4 {
	Ip: *string,
	Port: *f64,
	RouteThroughPrivateNetwork: interface{},
	VnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.ip">Ip</a></code> | <code>*string</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.port">Port</a></code> | <code>*f64</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>interface{}</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.vnetId">VnetId</a></code> | <code>*string</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#port TeamsRule#port}

---

##### `RouteThroughPrivateNetwork`<sup>Optional</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork"></a>

```go
RouteThroughPrivateNetwork interface{}
```

- *Type:* interface{}

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#route_through_private_network TeamsRule#route_through_private_network}

---

##### `VnetId`<sup>Optional</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.vnetId"></a>

```go
VnetId *string
```

- *Type:* *string

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#vnet_id TeamsRule#vnet_id}

---

### TeamsRuleRuleSettingsDnsResolversIpv6 <a name="TeamsRuleRuleSettingsDnsResolversIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsDnsResolversIpv6 {
	Ip: *string,
	Port: *f64,
	RouteThroughPrivateNetwork: interface{},
	VnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.ip">Ip</a></code> | <code>*string</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.port">Port</a></code> | <code>*f64</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>interface{}</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.vnetId">VnetId</a></code> | <code>*string</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#port TeamsRule#port}

---

##### `RouteThroughPrivateNetwork`<sup>Optional</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork"></a>

```go
RouteThroughPrivateNetwork interface{}
```

- *Type:* interface{}

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#route_through_private_network TeamsRule#route_through_private_network}

---

##### `VnetId`<sup>Optional</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.vnetId"></a>

```go
VnetId *string
```

- *Type:* *string

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#vnet_id TeamsRule#vnet_id}

---

### TeamsRuleRuleSettingsEgress <a name="TeamsRuleRuleSettingsEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsEgress {
	Ipv4: *string,
	Ipv6: *string,
	Ipv4Fallback: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4">Ipv4</a></code> | <code>*string</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6">Ipv6</a></code> | <code>*string</code> | The IPv6 range to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback">Ipv4Fallback</a></code> | <code>*string</code> | The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4"></a>

```go
Ipv4 *string
```

- *Type:* *string

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6"></a>

```go
Ipv6 *string
```

- *Type:* *string

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

##### `Ipv4Fallback`<sup>Optional</sup> <a name="Ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback"></a>

```go
Ipv4Fallback *string
```

- *Type:* *string

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

---

### TeamsRuleRuleSettingsL4Override <a name="TeamsRuleRuleSettingsL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsL4Override {
	Ip: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip">Ip</a></code> | <code>*string</code> | Override IP to forward traffic to. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port">Port</a></code> | <code>*f64</code> | Override Port to forward traffic to. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#port TeamsRule#port}

---

### TeamsRuleRuleSettingsNotificationSettings <a name="TeamsRuleRuleSettingsNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsNotificationSettings {
	Enabled: interface{},
	Message: *string,
	SupportUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.message">Message</a></code> | <code>*string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | Support URL to show in the notification. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.message"></a>

```go
Message *string
```

- *Type:* *string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#message TeamsRule#message}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#support_url TeamsRule#support_url}

---

### TeamsRuleRuleSettingsPayloadLog <a name="TeamsRuleRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsPayloadLog {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable DLP Payload Logging for this rule. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

### TeamsRuleRuleSettingsResolveDnsInternally <a name="TeamsRuleRuleSettingsResolveDnsInternally" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsResolveDnsInternally {
	Fallback: *string,
	ViewId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally.property.fallback">Fallback</a></code> | <code>*string</code> | The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally.property.viewId">ViewId</a></code> | <code>*string</code> | The internal DNS view identifier that's passed to the internal DNS service. |

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally.property.fallback"></a>

```go
Fallback *string
```

- *Type:* *string

The fallback behavior to apply when the internal DNS response code is different from 'NOERROR' or when the response data only contains CNAME records for 'A' or 'AAAA' queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#fallback TeamsRule#fallback}

---

##### `ViewId`<sup>Optional</sup> <a name="ViewId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally.property.viewId"></a>

```go
ViewId *string
```

- *Type:* *string

The internal DNS view identifier that's passed to the internal DNS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#view_id TeamsRule#view_id}

---

### TeamsRuleRuleSettingsUntrustedCert <a name="TeamsRuleRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

&teamsrule.TeamsRuleRuleSettingsUntrustedCert {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action">Action</a></code> | <code>*string</code> | Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_rule#action TeamsRule#action}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsRuleRuleSettingsAuditSshOutputReference <a name="TeamsRuleRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsAuditSshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsAuditSshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput">CommandLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging">CommandLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLoggingInput`<sup>Optional</sup> <a name="CommandLoggingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput"></a>

```go
func CommandLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `CommandLogging`<sup>Required</sup> <a name="CommandLogging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```go
func CommandLogging() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---


### TeamsRuleRuleSettingsBisoAdminControlsOutputReference <a name="TeamsRuleRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsBisoAdminControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsBisoAdminControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetCopy">ResetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableClipboardRedirection">ResetDisableClipboardRedirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste">ResetDisableCopyPaste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload">ResetDisableDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard">ResetDisableKeyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting">ResetDisablePrinting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload">ResetDisableUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDownload">ResetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetKeyboard">ResetKeyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetPaste">ResetPaste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetPrinting">ResetPrinting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetUpload">ResetUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopy` <a name="ResetCopy" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetCopy"></a>

```go
func ResetCopy()
```

##### `ResetDisableClipboardRedirection` <a name="ResetDisableClipboardRedirection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableClipboardRedirection"></a>

```go
func ResetDisableClipboardRedirection()
```

##### `ResetDisableCopyPaste` <a name="ResetDisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste"></a>

```go
func ResetDisableCopyPaste()
```

##### `ResetDisableDownload` <a name="ResetDisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload"></a>

```go
func ResetDisableDownload()
```

##### `ResetDisableKeyboard` <a name="ResetDisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard"></a>

```go
func ResetDisableKeyboard()
```

##### `ResetDisablePrinting` <a name="ResetDisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting"></a>

```go
func ResetDisablePrinting()
```

##### `ResetDisableUpload` <a name="ResetDisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload"></a>

```go
func ResetDisableUpload()
```

##### `ResetDownload` <a name="ResetDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDownload"></a>

```go
func ResetDownload()
```

##### `ResetKeyboard` <a name="ResetKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetKeyboard"></a>

```go
func ResetKeyboard()
```

##### `ResetPaste` <a name="ResetPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetPaste"></a>

```go
func ResetPaste()
```

##### `ResetPrinting` <a name="ResetPrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetPrinting"></a>

```go
func ResetPrinting()
```

##### `ResetUpload` <a name="ResetUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetUpload"></a>

```go
func ResetUpload()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.copyInput">CopyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirectionInput">DisableClipboardRedirectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput">DisableCopyPasteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput">DisableDownloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput">DisableKeyboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput">DisablePrintingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput">DisableUploadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.downloadInput">DownloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.keyboardInput">KeyboardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.pasteInput">PasteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.printingInput">PrintingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.uploadInput">UploadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.copy">Copy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirection">DisableClipboardRedirection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste">DisableCopyPaste</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload">DisableDownload</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard">DisableKeyboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting">DisablePrinting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload">DisableUpload</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.download">Download</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.keyboard">Keyboard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.paste">Paste</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.printing">Printing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.upload">Upload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyInput`<sup>Optional</sup> <a name="CopyInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.copyInput"></a>

```go
func CopyInput() *string
```

- *Type:* *string

---

##### `DisableClipboardRedirectionInput`<sup>Optional</sup> <a name="DisableClipboardRedirectionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirectionInput"></a>

```go
func DisableClipboardRedirectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisableCopyPasteInput`<sup>Optional</sup> <a name="DisableCopyPasteInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput"></a>

```go
func DisableCopyPasteInput() interface{}
```

- *Type:* interface{}

---

##### `DisableDownloadInput`<sup>Optional</sup> <a name="DisableDownloadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput"></a>

```go
func DisableDownloadInput() interface{}
```

- *Type:* interface{}

---

##### `DisableKeyboardInput`<sup>Optional</sup> <a name="DisableKeyboardInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput"></a>

```go
func DisableKeyboardInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePrintingInput`<sup>Optional</sup> <a name="DisablePrintingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput"></a>

```go
func DisablePrintingInput() interface{}
```

- *Type:* interface{}

---

##### `DisableUploadInput`<sup>Optional</sup> <a name="DisableUploadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput"></a>

```go
func DisableUploadInput() interface{}
```

- *Type:* interface{}

---

##### `DownloadInput`<sup>Optional</sup> <a name="DownloadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.downloadInput"></a>

```go
func DownloadInput() *string
```

- *Type:* *string

---

##### `KeyboardInput`<sup>Optional</sup> <a name="KeyboardInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.keyboardInput"></a>

```go
func KeyboardInput() *string
```

- *Type:* *string

---

##### `PasteInput`<sup>Optional</sup> <a name="PasteInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.pasteInput"></a>

```go
func PasteInput() *string
```

- *Type:* *string

---

##### `PrintingInput`<sup>Optional</sup> <a name="PrintingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.printingInput"></a>

```go
func PrintingInput() *string
```

- *Type:* *string

---

##### `UploadInput`<sup>Optional</sup> <a name="UploadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.uploadInput"></a>

```go
func UploadInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Copy`<sup>Required</sup> <a name="Copy" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.copy"></a>

```go
func Copy() *string
```

- *Type:* *string

---

##### `DisableClipboardRedirection`<sup>Required</sup> <a name="DisableClipboardRedirection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirection"></a>

```go
func DisableClipboardRedirection() interface{}
```

- *Type:* interface{}

---

##### `DisableCopyPaste`<sup>Required</sup> <a name="DisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste"></a>

```go
func DisableCopyPaste() interface{}
```

- *Type:* interface{}

---

##### `DisableDownload`<sup>Required</sup> <a name="DisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload"></a>

```go
func DisableDownload() interface{}
```

- *Type:* interface{}

---

##### `DisableKeyboard`<sup>Required</sup> <a name="DisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard"></a>

```go
func DisableKeyboard() interface{}
```

- *Type:* interface{}

---

##### `DisablePrinting`<sup>Required</sup> <a name="DisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting"></a>

```go
func DisablePrinting() interface{}
```

- *Type:* interface{}

---

##### `DisableUpload`<sup>Required</sup> <a name="DisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload"></a>

```go
func DisableUpload() interface{}
```

- *Type:* interface{}

---

##### `Download`<sup>Required</sup> <a name="Download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.download"></a>

```go
func Download() *string
```

- *Type:* *string

---

##### `Keyboard`<sup>Required</sup> <a name="Keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.keyboard"></a>

```go
func Keyboard() *string
```

- *Type:* *string

---

##### `Paste`<sup>Required</sup> <a name="Paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.paste"></a>

```go
func Paste() *string
```

- *Type:* *string

---

##### `Printing`<sup>Required</sup> <a name="Printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.printing"></a>

```go
func Printing() *string
```

- *Type:* *string

---

##### `Upload`<sup>Required</sup> <a name="Upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.upload"></a>

```go
func Upload() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---


### TeamsRuleRuleSettingsCheckSessionOutputReference <a name="TeamsRuleRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsCheckSessionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsCheckSessionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput">EnforceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce">Enforce</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```go
func EnforceInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```go
func Enforce() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---


### TeamsRuleRuleSettingsDnsResolversIpv4List <a name="TeamsRuleRuleSettingsDnsResolversIpv4List" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsDnsResolversIpv4List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamsRuleRuleSettingsDnsResolversIpv4List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get"></a>

```go
func Get(index *f64) TeamsRuleRuleSettingsDnsResolversIpv4OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsRuleRuleSettingsDnsResolversIpv4OutputReference <a name="TeamsRuleRuleSettingsDnsResolversIpv4OutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsDnsResolversIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamsRuleRuleSettingsDnsResolversIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork">ResetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetVnetId">ResetVnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRouteThroughPrivateNetwork` <a name="ResetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork"></a>

```go
func ResetRouteThroughPrivateNetwork()
```

##### `ResetVnetId` <a name="ResetVnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetVnetId"></a>

```go
func ResetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput">RouteThroughPrivateNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput">VnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RouteThroughPrivateNetworkInput`<sup>Optional</sup> <a name="RouteThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput"></a>

```go
func RouteThroughPrivateNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `VnetIdInput`<sup>Optional</sup> <a name="VnetIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput"></a>

```go
func VnetIdInput() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RouteThroughPrivateNetwork`<sup>Required</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork"></a>

```go
func RouteThroughPrivateNetwork() interface{}
```

- *Type:* interface{}

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsRuleRuleSettingsDnsResolversIpv6List <a name="TeamsRuleRuleSettingsDnsResolversIpv6List" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsDnsResolversIpv6List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamsRuleRuleSettingsDnsResolversIpv6List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get"></a>

```go
func Get(index *f64) TeamsRuleRuleSettingsDnsResolversIpv6OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsRuleRuleSettingsDnsResolversIpv6OutputReference <a name="TeamsRuleRuleSettingsDnsResolversIpv6OutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsDnsResolversIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamsRuleRuleSettingsDnsResolversIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork">ResetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetVnetId">ResetVnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRouteThroughPrivateNetwork` <a name="ResetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork"></a>

```go
func ResetRouteThroughPrivateNetwork()
```

##### `ResetVnetId` <a name="ResetVnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetVnetId"></a>

```go
func ResetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput">RouteThroughPrivateNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput">VnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork">RouteThroughPrivateNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RouteThroughPrivateNetworkInput`<sup>Optional</sup> <a name="RouteThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput"></a>

```go
func RouteThroughPrivateNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `VnetIdInput`<sup>Optional</sup> <a name="VnetIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput"></a>

```go
func VnetIdInput() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RouteThroughPrivateNetwork`<sup>Required</sup> <a name="RouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork"></a>

```go
func RouteThroughPrivateNetwork() interface{}
```

- *Type:* interface{}

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsRuleRuleSettingsDnsResolversOutputReference <a name="TeamsRuleRuleSettingsDnsResolversOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsDnsResolversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsDnsResolversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4"></a>

```go
func PutIpv4(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6"></a>

```go
func PutIpv6(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv4"></a>

```go
func ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List">TeamsRuleRuleSettingsDnsResolversIpv4List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List">TeamsRuleRuleSettingsDnsResolversIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4"></a>

```go
func Ipv4() TeamsRuleRuleSettingsDnsResolversIpv4List
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List">TeamsRuleRuleSettingsDnsResolversIpv4List</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6"></a>

```go
func Ipv6() TeamsRuleRuleSettingsDnsResolversIpv6List
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List">TeamsRuleRuleSettingsDnsResolversIpv6List</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4Input"></a>

```go
func Ipv4Input() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---


### TeamsRuleRuleSettingsEgressOutputReference <a name="TeamsRuleRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsEgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsEgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback">ResetIpv4Fallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Fallback` <a name="ResetIpv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```go
func ResetIpv4Fallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput">Ipv4FallbackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4">Ipv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback">Ipv4Fallback</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4FallbackInput`<sup>Optional</sup> <a name="Ipv4FallbackInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```go
func Ipv4FallbackInput() *string
```

- *Type:* *string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```go
func Ipv4Input() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4"></a>

```go
func Ipv4() *string
```

- *Type:* *string

---

##### `Ipv4Fallback`<sup>Required</sup> <a name="Ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```go
func Ipv4Fallback() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---


### TeamsRuleRuleSettingsL4OverrideOutputReference <a name="TeamsRuleRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsL4OverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsL4OverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---


### TeamsRuleRuleSettingsNotificationSettingsOutputReference <a name="TeamsRuleRuleSettingsNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---


### TeamsRuleRuleSettingsOutputReference <a name="TeamsRuleRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh">PutAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls">PutBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession">PutCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers">PutDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override">PutL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog">PutPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putResolveDnsInternally">PutResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert">PutUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders">ResetAddHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass">ResetAllowChildBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh">ResetAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls">ResetBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled">ResetBlockPageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason">ResetBlockPageReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule">ResetBypassParentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession">ResetCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetDnsResolvers">ResetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches">ResetIgnoreCnameCategoryMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">ResetInsecureDisableDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories">ResetIpCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override">ResetL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost">ResetOverrideHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps">ResetOverrideIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog">ResetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsInternally">ResetResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsThroughCloudflare">ResetResolveDnsThroughCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert">ResetUntrustedCert</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditSsh` <a name="PutAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh"></a>

```go
func PutAuditSsh(value TeamsRuleRuleSettingsAuditSsh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---

##### `PutBisoAdminControls` <a name="PutBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls"></a>

```go
func PutBisoAdminControls(value TeamsRuleRuleSettingsBisoAdminControls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `PutCheckSession` <a name="PutCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession"></a>

```go
func PutCheckSession(value TeamsRuleRuleSettingsCheckSession)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `PutDnsResolvers` <a name="PutDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers"></a>

```go
func PutDnsResolvers(value TeamsRuleRuleSettingsDnsResolvers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress"></a>

```go
func PutEgress(value TeamsRuleRuleSettingsEgress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `PutL4Override` <a name="PutL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override"></a>

```go
func PutL4Override(value TeamsRuleRuleSettingsL4Override)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings"></a>

```go
func PutNotificationSettings(value TeamsRuleRuleSettingsNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog"></a>

```go
func PutPayloadLog(value TeamsRuleRuleSettingsPayloadLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---

##### `PutResolveDnsInternally` <a name="PutResolveDnsInternally" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putResolveDnsInternally"></a>

```go
func PutResolveDnsInternally(value TeamsRuleRuleSettingsResolveDnsInternally)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putResolveDnsInternally.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a>

---

##### `PutUntrustedCert` <a name="PutUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert"></a>

```go
func PutUntrustedCert(value TeamsRuleRuleSettingsUntrustedCert)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---

##### `ResetAddHeaders` <a name="ResetAddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders"></a>

```go
func ResetAddHeaders()
```

##### `ResetAllowChildBypass` <a name="ResetAllowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass"></a>

```go
func ResetAllowChildBypass()
```

##### `ResetAuditSsh` <a name="ResetAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh"></a>

```go
func ResetAuditSsh()
```

##### `ResetBisoAdminControls` <a name="ResetBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls"></a>

```go
func ResetBisoAdminControls()
```

##### `ResetBlockPageEnabled` <a name="ResetBlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```go
func ResetBlockPageEnabled()
```

##### `ResetBlockPageReason` <a name="ResetBlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason"></a>

```go
func ResetBlockPageReason()
```

##### `ResetBypassParentRule` <a name="ResetBypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule"></a>

```go
func ResetBypassParentRule()
```

##### `ResetCheckSession` <a name="ResetCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession"></a>

```go
func ResetCheckSession()
```

##### `ResetDnsResolvers` <a name="ResetDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetDnsResolvers"></a>

```go
func ResetDnsResolvers()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetIgnoreCnameCategoryMatches` <a name="ResetIgnoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches"></a>

```go
func ResetIgnoreCnameCategoryMatches()
```

##### `ResetInsecureDisableDnssecValidation` <a name="ResetInsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```go
func ResetInsecureDisableDnssecValidation()
```

##### `ResetIpCategories` <a name="ResetIpCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories"></a>

```go
func ResetIpCategories()
```

##### `ResetL4Override` <a name="ResetL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override"></a>

```go
func ResetL4Override()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```

##### `ResetOverrideHost` <a name="ResetOverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost"></a>

```go
func ResetOverrideHost()
```

##### `ResetOverrideIps` <a name="ResetOverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps"></a>

```go
func ResetOverrideIps()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog"></a>

```go
func ResetPayloadLog()
```

##### `ResetResolveDnsInternally` <a name="ResetResolveDnsInternally" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsInternally"></a>

```go
func ResetResolveDnsInternally()
```

##### `ResetResolveDnsThroughCloudflare` <a name="ResetResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsThroughCloudflare"></a>

```go
func ResetResolveDnsThroughCloudflare()
```

##### `ResetUntrustedCert` <a name="ResetUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert"></a>

```go
func ResetUntrustedCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh">AuditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls">BisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession">CheckSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolvers">DnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference">TeamsRuleRuleSettingsDnsResolversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override">L4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference">TeamsRuleRuleSettingsNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsInternally">ResolveDnsInternally</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference">TeamsRuleRuleSettingsResolveDnsInternallyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert">UntrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput">AddHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput">AllowChildBypassInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput">AuditSshInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput">BisoAdminControlsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput">BlockPageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput">BlockPageReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput">BypassParentRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput">CheckSessionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolversInput">DnsResolversInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput">EgressInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput">IgnoreCnameCategoryMatchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">InsecureDisableDnssecValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput">IpCategoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput">L4OverrideInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput">OverrideHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput">OverrideIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsInternallyInput">ResolveDnsInternallyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput">ResolveDnsThroughCloudflareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput">UntrustedCertInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders">AddHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass">AllowChildBypass</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled">BlockPageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason">BlockPageReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule">BypassParentRule</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ignoreCnameCategoryMatches">IgnoreCnameCategoryMatches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation">InsecureDisableDnssecValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories">IpCategories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost">OverrideHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps">OverrideIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflare">ResolveDnsThroughCloudflare</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditSsh`<sup>Required</sup> <a name="AuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh"></a>

```go
func AuditSsh() TeamsRuleRuleSettingsAuditSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a>

---

##### `BisoAdminControls`<sup>Required</sup> <a name="BisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls"></a>

```go
func BisoAdminControls() TeamsRuleRuleSettingsBisoAdminControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `CheckSession`<sup>Required</sup> <a name="CheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession"></a>

```go
func CheckSession() TeamsRuleRuleSettingsCheckSessionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a>

---

##### `DnsResolvers`<sup>Required</sup> <a name="DnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolvers"></a>

```go
func DnsResolvers() TeamsRuleRuleSettingsDnsResolversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference">TeamsRuleRuleSettingsDnsResolversOutputReference</a>

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress"></a>

```go
func Egress() TeamsRuleRuleSettingsEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a>

---

##### `L4Override`<sup>Required</sup> <a name="L4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override"></a>

```go
func L4Override() TeamsRuleRuleSettingsL4OverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a>

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettings"></a>

```go
func NotificationSettings() TeamsRuleRuleSettingsNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference">TeamsRuleRuleSettingsNotificationSettingsOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog"></a>

```go
func PayloadLog() TeamsRuleRuleSettingsPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a>

---

##### `ResolveDnsInternally`<sup>Required</sup> <a name="ResolveDnsInternally" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsInternally"></a>

```go
func ResolveDnsInternally() TeamsRuleRuleSettingsResolveDnsInternallyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference">TeamsRuleRuleSettingsResolveDnsInternallyOutputReference</a>

---

##### `UntrustedCert`<sup>Required</sup> <a name="UntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert"></a>

```go
func UntrustedCert() TeamsRuleRuleSettingsUntrustedCertOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a>

---

##### `AddHeadersInput`<sup>Optional</sup> <a name="AddHeadersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput"></a>

```go
func AddHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowChildBypassInput`<sup>Optional</sup> <a name="AllowChildBypassInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput"></a>

```go
func AllowChildBypassInput() interface{}
```

- *Type:* interface{}

---

##### `AuditSshInput`<sup>Optional</sup> <a name="AuditSshInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput"></a>

```go
func AuditSshInput() TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---

##### `BisoAdminControlsInput`<sup>Optional</sup> <a name="BisoAdminControlsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```go
func BisoAdminControlsInput() TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `BlockPageEnabledInput`<sup>Optional</sup> <a name="BlockPageEnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```go
func BlockPageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPageReasonInput`<sup>Optional</sup> <a name="BlockPageReasonInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput"></a>

```go
func BlockPageReasonInput() *string
```

- *Type:* *string

---

##### `BypassParentRuleInput`<sup>Optional</sup> <a name="BypassParentRuleInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput"></a>

```go
func BypassParentRuleInput() interface{}
```

- *Type:* interface{}

---

##### `CheckSessionInput`<sup>Optional</sup> <a name="CheckSessionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput"></a>

```go
func CheckSessionInput() TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `DnsResolversInput`<sup>Optional</sup> <a name="DnsResolversInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolversInput"></a>

```go
func DnsResolversInput() TeamsRuleRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput"></a>

```go
func EgressInput() TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `IgnoreCnameCategoryMatchesInput`<sup>Optional</sup> <a name="IgnoreCnameCategoryMatchesInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput"></a>

```go
func IgnoreCnameCategoryMatchesInput() interface{}
```

- *Type:* interface{}

---

##### `InsecureDisableDnssecValidationInput`<sup>Optional</sup> <a name="InsecureDisableDnssecValidationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```go
func InsecureDisableDnssecValidationInput() interface{}
```

- *Type:* interface{}

---

##### `IpCategoriesInput`<sup>Optional</sup> <a name="IpCategoriesInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput"></a>

```go
func IpCategoriesInput() interface{}
```

- *Type:* interface{}

---

##### `L4OverrideInput`<sup>Optional</sup> <a name="L4OverrideInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput"></a>

```go
func L4OverrideInput() TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() TeamsRuleRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---

##### `OverrideHostInput`<sup>Optional</sup> <a name="OverrideHostInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput"></a>

```go
func OverrideHostInput() *string
```

- *Type:* *string

---

##### `OverrideIpsInput`<sup>Optional</sup> <a name="OverrideIpsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput"></a>

```go
func OverrideIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput"></a>

```go
func PayloadLogInput() TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---

##### `ResolveDnsInternallyInput`<sup>Optional</sup> <a name="ResolveDnsInternallyInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsInternallyInput"></a>

```go
func ResolveDnsInternallyInput() TeamsRuleRuleSettingsResolveDnsInternally
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a>

---

##### `ResolveDnsThroughCloudflareInput`<sup>Optional</sup> <a name="ResolveDnsThroughCloudflareInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput"></a>

```go
func ResolveDnsThroughCloudflareInput() interface{}
```

- *Type:* interface{}

---

##### `UntrustedCertInput`<sup>Optional</sup> <a name="UntrustedCertInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput"></a>

```go
func UntrustedCertInput() TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---

##### `AddHeaders`<sup>Required</sup> <a name="AddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders"></a>

```go
func AddHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowChildBypass`<sup>Required</sup> <a name="AllowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass"></a>

```go
func AllowChildBypass() interface{}
```

- *Type:* interface{}

---

##### `BlockPageEnabled`<sup>Required</sup> <a name="BlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled"></a>

```go
func BlockPageEnabled() interface{}
```

- *Type:* interface{}

---

##### `BlockPageReason`<sup>Required</sup> <a name="BlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason"></a>

```go
func BlockPageReason() *string
```

- *Type:* *string

---

##### `BypassParentRule`<sup>Required</sup> <a name="BypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule"></a>

```go
func BypassParentRule() interface{}
```

- *Type:* interface{}

---

##### `IgnoreCnameCategoryMatches`<sup>Required</sup> <a name="IgnoreCnameCategoryMatches" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ignoreCnameCategoryMatches"></a>

```go
func IgnoreCnameCategoryMatches() interface{}
```

- *Type:* interface{}

---

##### `InsecureDisableDnssecValidation`<sup>Required</sup> <a name="InsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```go
func InsecureDisableDnssecValidation() interface{}
```

- *Type:* interface{}

---

##### `IpCategories`<sup>Required</sup> <a name="IpCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories"></a>

```go
func IpCategories() interface{}
```

- *Type:* interface{}

---

##### `OverrideHost`<sup>Required</sup> <a name="OverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost"></a>

```go
func OverrideHost() *string
```

- *Type:* *string

---

##### `OverrideIps`<sup>Required</sup> <a name="OverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps"></a>

```go
func OverrideIps() *[]*string
```

- *Type:* *[]*string

---

##### `ResolveDnsThroughCloudflare`<sup>Required</sup> <a name="ResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflare"></a>

```go
func ResolveDnsThroughCloudflare() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---


### TeamsRuleRuleSettingsPayloadLogOutputReference <a name="TeamsRuleRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsPayloadLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsPayloadLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---


### TeamsRuleRuleSettingsResolveDnsInternallyOutputReference <a name="TeamsRuleRuleSettingsResolveDnsInternallyOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsResolveDnsInternallyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsResolveDnsInternallyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resetViewId">ResetViewId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFallback` <a name="ResetFallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resetFallback"></a>

```go
func ResetFallback()
```

##### `ResetViewId` <a name="ResetViewId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.resetViewId"></a>

```go
func ResetViewId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.viewIdInput">ViewIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fallback">Fallback</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.viewId">ViewId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fallbackInput"></a>

```go
func FallbackInput() *string
```

- *Type:* *string

---

##### `ViewIdInput`<sup>Optional</sup> <a name="ViewIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.viewIdInput"></a>

```go
func ViewIdInput() *string
```

- *Type:* *string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.fallback"></a>

```go
func Fallback() *string
```

- *Type:* *string

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.viewId"></a>

```go
func ViewId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternallyOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsResolveDnsInternally
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsResolveDnsInternally">TeamsRuleRuleSettingsResolveDnsInternally</a>

---


### TeamsRuleRuleSettingsUntrustedCertOutputReference <a name="TeamsRuleRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/teamsrule"

teamsrule.NewTeamsRuleRuleSettingsUntrustedCertOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsRuleRuleSettingsUntrustedCertOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---



