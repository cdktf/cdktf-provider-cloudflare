# `loadBalancerPool` Submodule <a name="`loadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.loadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPool <a name="LoadBalancerPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPool(scope Construct, id *string, config LoadBalancerPoolConfig) LoadBalancerPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig">LoadBalancerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding">PutLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter">PutNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins">PutOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering">PutOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions">ResetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude">ResetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding">ResetLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude">ResetLongitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins">ResetMinimumOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitorGroup">ResetMonitorGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter">ResetNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering">ResetOriginSteering</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoadShedding` <a name="PutLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding"></a>

```go
func PutLoadShedding(value LoadBalancerPoolLoadShedding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---

##### `PutNotificationFilter` <a name="PutNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter"></a>

```go
func PutNotificationFilter(value LoadBalancerPoolNotificationFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---

##### `PutOrigins` <a name="PutOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins"></a>

```go
func PutOrigins(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOriginSteering` <a name="PutOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering"></a>

```go
func PutOriginSteering(value LoadBalancerPoolOriginSteering)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---

##### `ResetCheckRegions` <a name="ResetCheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions"></a>

```go
func ResetCheckRegions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLatitude` <a name="ResetLatitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude"></a>

```go
func ResetLatitude()
```

##### `ResetLoadShedding` <a name="ResetLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding"></a>

```go
func ResetLoadShedding()
```

##### `ResetLongitude` <a name="ResetLongitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude"></a>

```go
func ResetLongitude()
```

##### `ResetMinimumOrigins` <a name="ResetMinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins"></a>

```go
func ResetMinimumOrigins()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor"></a>

```go
func ResetMonitor()
```

##### `ResetMonitorGroup` <a name="ResetMonitorGroup" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitorGroup"></a>

```go
func ResetMonitorGroup()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail"></a>

```go
func ResetNotificationEmail()
```

##### `ResetNotificationFilter` <a name="ResetNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter"></a>

```go
func ResetNotificationFilter()
```

##### `ResetOriginSteering` <a name="ResetOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering"></a>

```go
func ResetOriginSteering()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.LoadBalancerPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.LoadBalancerPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.LoadBalancerPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.LoadBalancerPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadBalancerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt">DisabledAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks">Networks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter">NotificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins">Origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering">OriginSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput">CheckRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput">LatitudeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput">LoadSheddingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput">LongitudeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput">MinimumOriginsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroupInput">MonitorGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput">MonitorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput">NotificationFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput">OriginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput">OriginSteeringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude">Latitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude">Longitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins">MinimumOrigins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor">Monitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroup">MonitorGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt"></a>

```go
func DisabledAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadShedding`<sup>Required</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding"></a>

```go
func LoadShedding() LoadBalancerPoolLoadSheddingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks"></a>

```go
func Networks() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationFilter`<sup>Required</sup> <a name="NotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter"></a>

```go
func NotificationFilter() LoadBalancerPoolNotificationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins"></a>

```go
func Origins() LoadBalancerPoolOriginsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a>

---

##### `OriginSteering`<sup>Required</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering"></a>

```go
func OriginSteering() LoadBalancerPoolOriginSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CheckRegionsInput`<sup>Optional</sup> <a name="CheckRegionsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput"></a>

```go
func CheckRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput"></a>

```go
func LatitudeInput() *f64
```

- *Type:* *f64

---

##### `LoadSheddingInput`<sup>Optional</sup> <a name="LoadSheddingInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput"></a>

```go
func LoadSheddingInput() interface{}
```

- *Type:* interface{}

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput"></a>

```go
func LongitudeInput() *f64
```

- *Type:* *f64

---

##### `MinimumOriginsInput`<sup>Optional</sup> <a name="MinimumOriginsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput"></a>

```go
func MinimumOriginsInput() *f64
```

- *Type:* *f64

---

##### `MonitorGroupInput`<sup>Optional</sup> <a name="MonitorGroupInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroupInput"></a>

```go
func MonitorGroupInput() *string
```

- *Type:* *string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput"></a>

```go
func MonitorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `NotificationFilterInput`<sup>Optional</sup> <a name="NotificationFilterInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput"></a>

```go
func NotificationFilterInput() interface{}
```

- *Type:* interface{}

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput"></a>

```go
func OriginsInput() interface{}
```

- *Type:* interface{}

---

##### `OriginSteeringInput`<sup>Optional</sup> <a name="OriginSteeringInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput"></a>

```go
func OriginSteeringInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions"></a>

```go
func CheckRegions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude"></a>

```go
func Latitude() *f64
```

- *Type:* *f64

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude"></a>

```go
func Longitude() *f64
```

- *Type:* *f64

---

##### `MinimumOrigins`<sup>Required</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins"></a>

```go
func MinimumOrigins() *f64
```

- *Type:* *f64

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor"></a>

```go
func Monitor() *string
```

- *Type:* *string

---

##### `MonitorGroup`<sup>Required</sup> <a name="MonitorGroup" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroup"></a>

```go
func MonitorGroup() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPoolConfig <a name="LoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Origins: interface{},
	CheckRegions: *[]*string,
	Description: *string,
	Enabled: interface{},
	Latitude: *f64,
	LoadShedding: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolLoadShedding,
	Longitude: *f64,
	MinimumOrigins: *f64,
	Monitor: *string,
	MonitorGroup: *string,
	NotificationEmail: *string,
	NotificationFilter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolNotificationFilter,
	OriginSteering: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolOriginSteering,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name">Name</a></code> | <code>*string</code> | A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins">Origins</a></code> | <code>interface{}</code> | The list of origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | A list of regions from which to run health checks. Null means every Cloudflare data center. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable (the default) or disable this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude">Latitude</a></code> | <code>*f64</code> | The latitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | Configures load shedding policies and percentages for the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude">Longitude</a></code> | <code>*f64</code> | The longitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins">MinimumOrigins</a></code> | <code>*f64</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor">Monitor</a></code> | <code>*string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitorGroup">MonitorGroup</a></code> | <code>*string</code> | The ID of the Monitor Group to use for checking the health of origins within this pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | This field is now deprecated. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter">NotificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | Filter pool and origin health notifications by resource type or health status. Use null to reset. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering">OriginSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins"></a>

```go
Origins interface{}
```

- *Type:* interface{}

The list of origins within this pool.

Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `CheckRegions`<sup>Optional</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions"></a>

```go
CheckRegions *[]*string
```

- *Type:* *[]*string

A list of regions from which to run health checks. Null means every Cloudflare data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable (the default) or disable this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `Latitude`<sup>Optional</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude"></a>

```go
Latitude *f64
```

- *Type:* *f64

The latitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, longitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `LoadShedding`<sup>Optional</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding"></a>

```go
LoadShedding LoadBalancerPoolLoadShedding
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

Configures load shedding policies and percentages for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `Longitude`<sup>Optional</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude"></a>

```go
Longitude *f64
```

- *Type:* *f64

The longitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, latitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `MinimumOrigins`<sup>Optional</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins"></a>

```go
MinimumOrigins *f64
```

- *Type:* *f64

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor"></a>

```go
Monitor *string
```

- *Type:* *string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `MonitorGroup`<sup>Optional</sup> <a name="MonitorGroup" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitorGroup"></a>

```go
MonitorGroup *string
```

- *Type:* *string

The ID of the Monitor Group to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#monitor_group LoadBalancerPool#monitor_group}

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

This field is now deprecated.

It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `NotificationFilter`<sup>Optional</sup> <a name="NotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter"></a>

```go
NotificationFilter LoadBalancerPoolNotificationFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

Filter pool and origin health notifications by resource type or health status. Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}

---

##### `OriginSteering`<sup>Optional</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering"></a>

```go
OriginSteering LoadBalancerPoolOriginSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

### LoadBalancerPoolLoadShedding <a name="LoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolLoadShedding {
	DefaultPercent: *f64,
	DefaultPolicy: *string,
	SessionPercent: *f64,
	SessionPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent">DefaultPercent</a></code> | <code>*f64</code> | The percent of traffic to shed from the pool, according to the default policy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy">DefaultPolicy</a></code> | <code>*string</code> | The default policy to use when load shedding. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent">SessionPercent</a></code> | <code>*f64</code> | The percent of existing sessions to shed from the pool, according to the session policy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash". |

---

##### `DefaultPercent`<sup>Optional</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent"></a>

```go
DefaultPercent *f64
```

- *Type:* *f64

The percent of traffic to shed from the pool, according to the default policy.

Applies to new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}

---

##### `DefaultPolicy`<sup>Optional</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy"></a>

```go
DefaultPolicy *string
```

- *Type:* *string

The default policy to use when load shedding.

A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
Available values: "random", "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}

---

##### `SessionPercent`<sup>Optional</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent"></a>

```go
SessionPercent *f64
```

- *Type:* *f64

The percent of existing sessions to shed from the pool, according to the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}

---

##### `SessionPolicy`<sup>Optional</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy"></a>

```go
SessionPolicy *string
```

- *Type:* *string

Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}

---

### LoadBalancerPoolNotificationFilter <a name="LoadBalancerPoolNotificationFilter" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolNotificationFilter {
	Origin: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin,
	Pool: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolNotificationFilterPool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool">Pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin"></a>

```go
Origin LoadBalancerPoolNotificationFilterOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#origin LoadBalancerPool#origin}

---

##### `Pool`<sup>Optional</sup> <a name="Pool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool"></a>

```go
Pool LoadBalancerPoolNotificationFilterPool
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#pool LoadBalancerPool#pool}

---

### LoadBalancerPoolNotificationFilterOrigin <a name="LoadBalancerPoolNotificationFilterOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolNotificationFilterOrigin {
	Disable: interface{},
	Healthy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable">Disable</a></code> | <code>interface{}</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy">Healthy</a></code> | <code>interface{}</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable"></a>

```go
Disable interface{}
```

- *Type:* interface{}

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `Healthy`<sup>Optional</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy"></a>

```go
Healthy interface{}
```

- *Type:* interface{}

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolNotificationFilterPool <a name="LoadBalancerPoolNotificationFilterPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolNotificationFilterPool {
	Disable: interface{},
	Healthy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable">Disable</a></code> | <code>interface{}</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy">Healthy</a></code> | <code>interface{}</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable"></a>

```go
Disable interface{}
```

- *Type:* interface{}

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `Healthy`<sup>Optional</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy"></a>

```go
Healthy interface{}
```

- *Type:* interface{}

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolOrigins <a name="LoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolOrigins {
	Address: *string,
	Enabled: interface{},
	Header: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.loadBalancerPool.LoadBalancerPoolOriginsHeader,
	Name: *string,
	Port: *f64,
	VirtualNetworkId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address">Address</a></code> | <code>*string</code> | The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable (the default) this origin within the pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name">Name</a></code> | <code>*string</code> | A human-identifiable name for the origin. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port">Port</a></code> | <code>*f64</code> | The port for upstream connections. A value of 0 means the default port for the protocol will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight">Weight</a></code> | <code>*f64</code> | The weight of this origin relative to other origins in the pool. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address"></a>

```go
Address *string
```

- *Type:* *string

The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname.

Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable (the default) this origin within the pool.

Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header"></a>

```go
Header LoadBalancerPoolOriginsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-identifiable name for the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port for upstream connections. A value of 0 means the default port for the protocol will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#port LoadBalancerPool#port}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#virtual_network_id LoadBalancerPool#virtual_network_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight of this origin relative to other origins in the pool.

Based on the configured weight the total traffic is distributed among origins within the pool.

* `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin's outstanding requests.
* `origin_steering.policy="least_connections"`: Use weight to scale the origin's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}

---

### LoadBalancerPoolOriginsHeader <a name="LoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolOriginsHeader {
	Host: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host">Host</a></code> | <code>*[]*string</code> | The 'Host' header allows to override the hostname set in the HTTP request. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host"></a>

```go
Host *[]*string
```

- *Type:* *[]*string

The 'Host' header allows to override the hostname set in the HTTP request.

Current support is 1 'Host' header override per origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#host LoadBalancerPool#host}

---

### LoadBalancerPoolOriginSteering <a name="LoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

&loadbalancerpool.LoadBalancerPoolOriginSteering {
	Policy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy">Policy</a></code> | <code>*string</code> | The type of origin steering policy to use. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The type of origin steering policy to use.

* `"random"`: Select an origin randomly.
* `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.
* `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
  Available values: "random", "hash", "least_outstanding_requests", "least_connections".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPoolLoadSheddingOutputReference <a name="LoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolLoadSheddingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolLoadSheddingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent">ResetDefaultPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy">ResetDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent">ResetSessionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy">ResetSessionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultPercent` <a name="ResetDefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent"></a>

```go
func ResetDefaultPercent()
```

##### `ResetDefaultPolicy` <a name="ResetDefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy"></a>

```go
func ResetDefaultPolicy()
```

##### `ResetSessionPercent` <a name="ResetSessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent"></a>

```go
func ResetSessionPercent()
```

##### `ResetSessionPolicy` <a name="ResetSessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy"></a>

```go
func ResetSessionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput">DefaultPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput">DefaultPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput">SessionPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput">SessionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">DefaultPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">DefaultPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">SessionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPercentInput`<sup>Optional</sup> <a name="DefaultPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput"></a>

```go
func DefaultPercentInput() *f64
```

- *Type:* *f64

---

##### `DefaultPolicyInput`<sup>Optional</sup> <a name="DefaultPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput"></a>

```go
func DefaultPolicyInput() *string
```

- *Type:* *string

---

##### `SessionPercentInput`<sup>Optional</sup> <a name="SessionPercentInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput"></a>

```go
func SessionPercentInput() *f64
```

- *Type:* *f64

---

##### `SessionPolicyInput`<sup>Optional</sup> <a name="SessionPolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput"></a>

```go
func SessionPolicyInput() *string
```

- *Type:* *string

---

##### `DefaultPercent`<sup>Required</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```go
func DefaultPercent() *f64
```

- *Type:* *f64

---

##### `DefaultPolicy`<sup>Required</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```go
func DefaultPolicy() *string
```

- *Type:* *string

---

##### `SessionPercent`<sup>Required</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```go
func SessionPercent() *f64
```

- *Type:* *f64

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```go
func SessionPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolNotificationFilterOriginOutputReference <a name="LoadBalancerPoolNotificationFilterOriginOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolNotificationFilterOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolNotificationFilterOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy">ResetHealthy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable"></a>

```go
func ResetDisable()
```

##### `ResetHealthy` <a name="ResetHealthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy"></a>

```go
func ResetHealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput">DisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput">HealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable">Disable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy">Healthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput"></a>

```go
func DisableInput() interface{}
```

- *Type:* interface{}

---

##### `HealthyInput`<sup>Optional</sup> <a name="HealthyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput"></a>

```go
func HealthyInput() interface{}
```

- *Type:* interface{}

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable"></a>

```go
func Disable() interface{}
```

- *Type:* interface{}

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy"></a>

```go
func Healthy() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolNotificationFilterOutputReference <a name="LoadBalancerPoolNotificationFilterOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolNotificationFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolNotificationFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool">PutPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool">ResetPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin"></a>

```go
func PutOrigin(value LoadBalancerPoolNotificationFilterOrigin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---

##### `PutPool` <a name="PutPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool"></a>

```go
func PutPool(value LoadBalancerPoolNotificationFilterPool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetPool` <a name="ResetPool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool"></a>

```go
func ResetPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool">Pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput">OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput">PoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin"></a>

```go
func Origin() LoadBalancerPoolNotificationFilterOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a>

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool"></a>

```go
func Pool() LoadBalancerPoolNotificationFilterPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a>

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput"></a>

```go
func OriginInput() interface{}
```

- *Type:* interface{}

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput"></a>

```go
func PoolInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolNotificationFilterPoolOutputReference <a name="LoadBalancerPoolNotificationFilterPoolOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolNotificationFilterPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolNotificationFilterPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy">ResetHealthy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable"></a>

```go
func ResetDisable()
```

##### `ResetHealthy` <a name="ResetHealthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy"></a>

```go
func ResetHealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput">DisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput">HealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable">Disable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy">Healthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput"></a>

```go
func DisableInput() interface{}
```

- *Type:* interface{}

---

##### `HealthyInput`<sup>Optional</sup> <a name="HealthyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput"></a>

```go
func HealthyInput() interface{}
```

- *Type:* interface{}

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable"></a>

```go
func Disable() interface{}
```

- *Type:* interface{}

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy"></a>

```go
func Healthy() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolOriginsHeaderOutputReference <a name="LoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolOriginsHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolOriginsHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost"></a>

```go
func ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput">HostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host">Host</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput"></a>

```go
func HostInput() *[]*string
```

- *Type:* *[]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host"></a>

```go
func Host() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolOriginsList <a name="LoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadBalancerPoolOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get"></a>

```go
func Get(index *f64) LoadBalancerPoolOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolOriginsOutputReference <a name="LoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadBalancerPoolOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader"></a>

```go
func PutHeader(value LoadBalancerPoolOriginsHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt">DisabledAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt"></a>

```go
func DisabledAt() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header"></a>

```go
func Header() LoadBalancerPoolOriginsHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadBalancerPoolOriginSteeringOutputReference <a name="LoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/loadbalancerpool"

loadbalancerpool.NewLoadBalancerPoolOriginSteeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerPoolOriginSteeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



