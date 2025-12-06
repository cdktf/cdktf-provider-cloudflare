# `loadBalancer` Submodule <a name="`loadBalancer` Submodule" id="@cdktf/provider-cloudflare.loadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancer <a name="LoadBalancer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer cloudflare_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancer(Construct Scope, string Id, LoadBalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig">LoadBalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig">LoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting">PutAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy">PutLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering">PutRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes">PutSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting">ResetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy">ResetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering">ResetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools">ResetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes">ResetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl">ResetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy">ResetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdaptiveRouting` <a name="PutAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting"></a>

```csharp
private void PutAdaptiveRouting(LoadBalancerAdaptiveRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `PutLocationStrategy` <a name="PutLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy"></a>

```csharp
private void PutLocationStrategy(LoadBalancerLocationStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `PutRandomSteering` <a name="PutRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering"></a>

```csharp
private void PutRandomSteering(LoadBalancerRandomSteering Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules"></a>

```csharp
private void PutRules(IResolvable|LoadBalancerRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---

##### `PutSessionAffinityAttributes` <a name="PutSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes"></a>

```csharp
private void PutSessionAffinityAttributes(LoadBalancerSessionAffinityAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `ResetAdaptiveRouting` <a name="ResetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting"></a>

```csharp
private void ResetAdaptiveRouting()
```

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools"></a>

```csharp
private void ResetCountryPools()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLocationStrategy` <a name="ResetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy"></a>

```csharp
private void ResetLocationStrategy()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks"></a>

```csharp
private void ResetNetworks()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools"></a>

```csharp
private void ResetPopPools()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied"></a>

```csharp
private void ResetProxied()
```

##### `ResetRandomSteering` <a name="ResetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering"></a>

```csharp
private void ResetRandomSteering()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools"></a>

```csharp
private void ResetRegionPools()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetSessionAffinityAttributes` <a name="ResetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes"></a>

```csharp
private void ResetSessionAffinityAttributes()
```

##### `ResetSessionAffinityTtl` <a name="ResetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl"></a>

```csharp
private void ResetSessionAffinityTtl()
```

##### `ResetSteeringPolicy` <a name="ResetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy"></a>

```csharp
private void ResetSteeringPolicy()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput">AdaptiveRoutingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput">DefaultPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput">FallbackPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput">LocationStrategyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput">NetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput">PopPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput">ProxiedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput">RandomSteeringInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput">RulesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput">SessionAffinityAttributesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput">SessionAffinityTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput">SteeringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools">CountryPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks">Networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools">PopPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied">Proxied</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools">RegionPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting"></a>

```csharp
public LoadBalancerAdaptiveRoutingOutputReference AdaptiveRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy"></a>

```csharp
public LoadBalancerLocationStrategyOutputReference LocationStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering"></a>

```csharp
public LoadBalancerRandomSteeringOutputReference RandomSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules"></a>

```csharp
public LoadBalancerRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a>

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes"></a>

```csharp
public LoadBalancerSessionAffinityAttributesOutputReference SessionAffinityAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a>

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

##### `AdaptiveRoutingInput`<sup>Optional</sup> <a name="AdaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput"></a>

```csharp
public IResolvable|LoadBalancerAdaptiveRouting AdaptiveRoutingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DefaultPoolsInput`<sup>Optional</sup> <a name="DefaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput"></a>

```csharp
public string[] DefaultPoolsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FallbackPoolInput`<sup>Optional</sup> <a name="FallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput"></a>

```csharp
public string FallbackPoolInput { get; }
```

- *Type:* string

---

##### `LocationStrategyInput`<sup>Optional</sup> <a name="LocationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput"></a>

```csharp
public IResolvable|LoadBalancerLocationStrategy LocationStrategyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput"></a>

```csharp
public string[] NetworksInput { get; }
```

- *Type:* string[]

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput"></a>

```csharp
public bool|IResolvable ProxiedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RandomSteeringInput`<sup>Optional</sup> <a name="RandomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput"></a>

```csharp
public IResolvable|LoadBalancerRandomSteering RandomSteeringInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput"></a>

```csharp
public IResolvable|LoadBalancerRules[] RulesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---

##### `SessionAffinityAttributesInput`<sup>Optional</sup> <a name="SessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput"></a>

```csharp
public IResolvable|LoadBalancerSessionAffinityAttributes SessionAffinityAttributesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput"></a>

```csharp
public string SessionAffinityInput { get; }
```

- *Type:* string

---

##### `SessionAffinityTtlInput`<sup>Optional</sup> <a name="SessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput"></a>

```csharp
public double SessionAffinityTtlInput { get; }
```

- *Type:* double

---

##### `SteeringPolicyInput`<sup>Optional</sup> <a name="SteeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput"></a>

```csharp
public string SteeringPolicyInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks"></a>

```csharp
public string[] Networks { get; }
```

- *Type:* string[]

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied"></a>

```csharp
public bool|IResolvable Proxied { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; }
```

- *Type:* double

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerAdaptiveRouting <a name="LoadBalancerAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerAdaptiveRouting {
    bool|IResolvable FailoverAcrossPools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `FailoverAcrossPools`<sup>Optional</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools"></a>

```csharp
public bool|IResolvable FailoverAcrossPools { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerConfig <a name="LoadBalancerConfig" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] DefaultPools,
    string FallbackPool,
    string Name,
    string ZoneId,
    LoadBalancerAdaptiveRouting AdaptiveRouting = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    LoadBalancerLocationStrategy LocationStrategy = null,
    string[] Networks = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools = null,
    bool|IResolvable Proxied = null,
    LoadBalancerRandomSteering RandomSteering = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools = null,
    IResolvable|LoadBalancerRules[] Rules = null,
    string SessionAffinity = null,
    LoadBalancerSessionAffinityAttributes SessionAffinityAttributes = null,
    double SessionAffinityTtl = null,
    string SteeringPolicy = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name">Name</a></code> | <code>string</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools">CountryPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description">Description</a></code> | <code>string</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks">Networks</a></code> | <code>string[]</code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools">PopPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied">Proxied</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools">RegionPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules">Rules</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl">Ttl</a></code> | <code>double</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; set; }
```

- *Type:* string[]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; set; }
```

- *Type:* string

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `AdaptiveRouting`<sup>Optional</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting"></a>

```csharp
public LoadBalancerAdaptiveRouting AdaptiveRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `LocationStrategy`<sup>Optional</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy"></a>

```csharp
public LoadBalancerLocationStrategy LocationStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks"></a>

```csharp
public string[] Networks { get; set; }
```

- *Type:* string[]

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied"></a>

```csharp
public bool|IResolvable Proxied { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `RandomSteering`<sup>Optional</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering"></a>

```csharp
public LoadBalancerRandomSteering RandomSteering { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules"></a>

```csharp
public IResolvable|LoadBalancerRules[] Rules { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; set; }
```

- *Type:* string

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `SessionAffinityAttributes`<sup>Optional</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes"></a>

```csharp
public LoadBalancerSessionAffinityAttributes SessionAffinityAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `SessionAffinityTtl`<sup>Optional</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; set; }
```

- *Type:* double

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `SteeringPolicy`<sup>Optional</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; set; }
```

- *Type:* string

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerLocationStrategy <a name="LoadBalancerLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerLocationStrategy {
    string Mode = null,
    string PreferEcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode">Mode</a></code> | <code>string</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs">PreferEcs</a></code> | <code>string</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `PreferEcs`<sup>Optional</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs"></a>

```csharp
public string PreferEcs { get; set; }
```

- *Type:* string

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRandomSteering <a name="LoadBalancerRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRandomSteering {
    double DefaultWeight = null,
    System.Collections.Generic.IDictionary<string, double> PoolWeights = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights">PoolWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `DefaultWeight`<sup>Optional</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; set; }
```

- *Type:* double

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `PoolWeights`<sup>Optional</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeights { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRules <a name="LoadBalancerRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRules {
    string Condition = null,
    bool|IResolvable Disabled = null,
    LoadBalancerRulesFixedResponse FixedResponse = null,
    string Name = null,
    LoadBalancerRulesOverrides Overrides = null,
    double Priority = null,
    bool|IResolvable Terminates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition">Condition</a></code> | <code>string</code> | The condition expressions to evaluate. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled">Disabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Disable this specific rule. It will no longer be evaluated by this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | A collection of fields used to directly respond to the eyeball instead of routing to a pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name">Name</a></code> | <code>string</code> | Name of this rule. Only used for human readability. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | A collection of overrides to apply to the load balancer when this rule's condition is true. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority">Priority</a></code> | <code>double</code> | The order in which rules should be executed in relation to each other. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates">Terminates</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If this rule's condition is true, this causes rule evaluation to stop after processing this rule. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

The condition expressions to evaluate.

If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#condition LoadBalancer#condition}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Disable this specific rule. It will no longer be evaluated by this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse"></a>

```csharp
public LoadBalancerRulesFixedResponse FixedResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

A collection of fields used to directly respond to the eyeball instead of routing to a pool.

If a fixed_response is supplied the rule will be marked as terminates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of this rule. Only used for human readability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides"></a>

```csharp
public LoadBalancerRulesOverrides Overrides { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

A collection of overrides to apply to the load balancer when this rule's condition is true.

All fields are optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The order in which rules should be executed in relation to each other.

Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#priority LoadBalancer#priority}

---

##### `Terminates`<sup>Optional</sup> <a name="Terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates"></a>

```csharp
public bool|IResolvable Terminates { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If this rule's condition is true, this causes rule evaluation to stop after processing this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}

---

### LoadBalancerRulesFixedResponse <a name="LoadBalancerRulesFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesFixedResponse {
    string ContentType = null,
    string Location = null,
    string MessageBody = null,
    double StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType">ContentType</a></code> | <code>string</code> | The http 'Content-Type' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location">Location</a></code> | <code>string</code> | The http 'Location' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody">MessageBody</a></code> | <code>string</code> | Text to include as the http body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode">StatusCode</a></code> | <code>double</code> | The http status code to respond with. |

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The http 'Content-Type' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The http 'Location' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location LoadBalancer#location}

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody"></a>

```csharp
public string MessageBody { get; set; }
```

- *Type:* string

Text to include as the http body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

The http status code to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}

---

### LoadBalancerRulesOverrides <a name="LoadBalancerRulesOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverrides {
    LoadBalancerRulesOverridesAdaptiveRouting AdaptiveRouting = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools = null,
    string[] DefaultPools = null,
    string FallbackPool = null,
    LoadBalancerRulesOverridesLocationStrategy LocationStrategy = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools = null,
    LoadBalancerRulesOverridesRandomSteering RandomSteering = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools = null,
    string SessionAffinity = null,
    LoadBalancerRulesOverridesSessionAffinityAttributes SessionAffinityAttributes = null,
    double SessionAffinityTtl = null,
    string SteeringPolicy = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools">CountryPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools">PopPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools">RegionPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl">Ttl</a></code> | <code>double</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `AdaptiveRouting`<sup>Optional</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting"></a>

```csharp
public LoadBalancerRulesOverridesAdaptiveRouting AdaptiveRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `DefaultPools`<sup>Optional</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; set; }
```

- *Type:* string[]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `FallbackPool`<sup>Optional</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; set; }
```

- *Type:* string

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `LocationStrategy`<sup>Optional</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy"></a>

```csharp
public LoadBalancerRulesOverridesLocationStrategy LocationStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `RandomSteering`<sup>Optional</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering"></a>

```csharp
public LoadBalancerRulesOverridesRandomSteering RandomSteering { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; set; }
```

- *Type:* string

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `SessionAffinityAttributes`<sup>Optional</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes"></a>

```csharp
public LoadBalancerRulesOverridesSessionAffinityAttributes SessionAffinityAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `SessionAffinityTtl`<sup>Optional</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; set; }
```

- *Type:* double

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `SteeringPolicy`<sup>Optional</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; set; }
```

- *Type:* string

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerRulesOverridesAdaptiveRouting <a name="LoadBalancerRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesAdaptiveRouting {
    bool|IResolvable FailoverAcrossPools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `FailoverAcrossPools`<sup>Optional</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools"></a>

```csharp
public bool|IResolvable FailoverAcrossPools { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerRulesOverridesLocationStrategy <a name="LoadBalancerRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesLocationStrategy {
    string Mode = null,
    string PreferEcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode">Mode</a></code> | <code>string</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs">PreferEcs</a></code> | <code>string</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `PreferEcs`<sup>Optional</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs"></a>

```csharp
public string PreferEcs { get; set; }
```

- *Type:* string

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRulesOverridesRandomSteering <a name="LoadBalancerRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesRandomSteering {
    double DefaultWeight = null,
    System.Collections.Generic.IDictionary<string, double> PoolWeights = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights">PoolWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `DefaultWeight`<sup>Optional</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; set; }
```

- *Type:* double

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `PoolWeights`<sup>Optional</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeights { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRulesOverridesSessionAffinityAttributes <a name="LoadBalancerRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesSessionAffinityAttributes {
    double DrainDuration = null,
    string[] Headers = null,
    bool|IResolvable RequireAllHeaders = null,
    string Samesite = null,
    string Secure = null,
    string ZeroDowntimeFailover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>double</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers">Headers</a></code> | <code>string[]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite">Samesite</a></code> | <code>string</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure">Secure</a></code> | <code>string</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```csharp
public double DrainDuration { get; set; }
```

- *Type:* double

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers"></a>

```csharp
public string[] Headers { get; set; }
```

- *Type:* string[]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `RequireAllHeaders`<sup>Optional</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders"></a>

```csharp
public bool|IResolvable RequireAllHeaders { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `Samesite`<sup>Optional</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite"></a>

```csharp
public string Samesite { get; set; }
```

- *Type:* string

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure"></a>

```csharp
public string Secure { get; set; }
```

- *Type:* string

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `ZeroDowntimeFailover`<sup>Optional</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; set; }
```

- *Type:* string

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

### LoadBalancerSessionAffinityAttributes <a name="LoadBalancerSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerSessionAffinityAttributes {
    double DrainDuration = null,
    string[] Headers = null,
    bool|IResolvable RequireAllHeaders = null,
    string Samesite = null,
    string Secure = null,
    string ZeroDowntimeFailover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>double</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers">Headers</a></code> | <code>string[]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite">Samesite</a></code> | <code>string</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure">Secure</a></code> | <code>string</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration"></a>

```csharp
public double DrainDuration { get; set; }
```

- *Type:* double

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers"></a>

```csharp
public string[] Headers { get; set; }
```

- *Type:* string[]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `RequireAllHeaders`<sup>Optional</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders"></a>

```csharp
public bool|IResolvable RequireAllHeaders { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `Samesite`<sup>Optional</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite"></a>

```csharp
public string Samesite { get; set; }
```

- *Type:* string

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure"></a>

```csharp
public string Secure { get; set; }
```

- *Type:* string

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `ZeroDowntimeFailover`<sup>Optional</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; set; }
```

- *Type:* string

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerAdaptiveRoutingOutputReference <a name="LoadBalancerAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerAdaptiveRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools">ResetFailoverAcrossPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailoverAcrossPools` <a name="ResetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```csharp
private void ResetFailoverAcrossPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">FailoverAcrossPoolsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverAcrossPoolsInput`<sup>Optional</sup> <a name="FailoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```csharp
public bool|IResolvable FailoverAcrossPoolsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```csharp
public bool|IResolvable FailoverAcrossPools { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerAdaptiveRouting InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---


### LoadBalancerLocationStrategyOutputReference <a name="LoadBalancerLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerLocationStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs">ResetPreferEcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPreferEcs` <a name="ResetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs"></a>

```csharp
private void ResetPreferEcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput">PreferEcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PreferEcsInput`<sup>Optional</sup> <a name="PreferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput"></a>

```csharp
public string PreferEcsInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs"></a>

```csharp
public string PreferEcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerLocationStrategy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---


### LoadBalancerRandomSteeringOutputReference <a name="LoadBalancerRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRandomSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight">ResetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights">ResetPoolWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultWeight` <a name="ResetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight"></a>

```csharp
private void ResetDefaultWeight()
```

##### `ResetPoolWeights` <a name="ResetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights"></a>

```csharp
private void ResetPoolWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput">DefaultWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput">PoolWeightsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultWeightInput`<sup>Optional</sup> <a name="DefaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput"></a>

```csharp
public double DefaultWeightInput { get; }
```

- *Type:* double

---

##### `PoolWeightsInput`<sup>Optional</sup> <a name="PoolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeightsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; }
```

- *Type:* double

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeights { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRandomSteering InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---


### LoadBalancerRulesFixedResponseOutputReference <a name="LoadBalancerRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesFixedResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody"></a>

```csharp
private void ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput"></a>

```csharp
public string MessageBodyInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody"></a>

```csharp
public string MessageBody { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesFixedResponse InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---


### LoadBalancerRulesList <a name="LoadBalancerRulesList" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get"></a>

```csharp
private LoadBalancerRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRules[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---


### LoadBalancerRulesOutputReference <a name="LoadBalancerRulesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates">ResetTerminates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse"></a>

```csharp
private void PutFixedResponse(LoadBalancerRulesFixedResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(LoadBalancerRulesOverrides Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse"></a>

```csharp
private void ResetFixedResponse()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTerminates` <a name="ResetTerminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates"></a>

```csharp
private void ResetTerminates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput">OverridesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput">TerminatesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled">Disabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates">Terminates</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse"></a>

```csharp
public LoadBalancerRulesFixedResponseOutputReference FixedResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides"></a>

```csharp
public LoadBalancerRulesOverridesOutputReference Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput"></a>

```csharp
public IResolvable|LoadBalancerRulesFixedResponse FixedResponseInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput"></a>

```csharp
public IResolvable|LoadBalancerRulesOverrides OverridesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TerminatesInput`<sup>Optional</sup> <a name="TerminatesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput"></a>

```csharp
public bool|IResolvable TerminatesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Terminates`<sup>Required</sup> <a name="Terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates"></a>

```csharp
public bool|IResolvable Terminates { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRules InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>

---


### LoadBalancerRulesOverridesAdaptiveRoutingOutputReference <a name="LoadBalancerRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools">ResetFailoverAcrossPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailoverAcrossPools` <a name="ResetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```csharp
private void ResetFailoverAcrossPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">FailoverAcrossPoolsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverAcrossPoolsInput`<sup>Optional</sup> <a name="FailoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```csharp
public bool|IResolvable FailoverAcrossPoolsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```csharp
public bool|IResolvable FailoverAcrossPools { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesAdaptiveRouting InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---


### LoadBalancerRulesOverridesLocationStrategyOutputReference <a name="LoadBalancerRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesLocationStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs">ResetPreferEcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPreferEcs` <a name="ResetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs"></a>

```csharp
private void ResetPreferEcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput">PreferEcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PreferEcsInput`<sup>Optional</sup> <a name="PreferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput"></a>

```csharp
public string PreferEcsInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```csharp
public string PreferEcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesLocationStrategy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---


### LoadBalancerRulesOverridesOutputReference <a name="LoadBalancerRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting">PutAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy">PutLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering">PutRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes">PutSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting">ResetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools">ResetDefaultPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool">ResetFallbackPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy">ResetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering">ResetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools">ResetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes">ResetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl">ResetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy">ResetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdaptiveRouting` <a name="PutAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting"></a>

```csharp
private void PutAdaptiveRouting(LoadBalancerRulesOverridesAdaptiveRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `PutLocationStrategy` <a name="PutLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy"></a>

```csharp
private void PutLocationStrategy(LoadBalancerRulesOverridesLocationStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `PutRandomSteering` <a name="PutRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering"></a>

```csharp
private void PutRandomSteering(LoadBalancerRulesOverridesRandomSteering Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `PutSessionAffinityAttributes` <a name="PutSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes"></a>

```csharp
private void PutSessionAffinityAttributes(LoadBalancerRulesOverridesSessionAffinityAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `ResetAdaptiveRouting` <a name="ResetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting"></a>

```csharp
private void ResetAdaptiveRouting()
```

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools"></a>

```csharp
private void ResetCountryPools()
```

##### `ResetDefaultPools` <a name="ResetDefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools"></a>

```csharp
private void ResetDefaultPools()
```

##### `ResetFallbackPool` <a name="ResetFallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool"></a>

```csharp
private void ResetFallbackPool()
```

##### `ResetLocationStrategy` <a name="ResetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy"></a>

```csharp
private void ResetLocationStrategy()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools"></a>

```csharp
private void ResetPopPools()
```

##### `ResetRandomSteering` <a name="ResetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering"></a>

```csharp
private void ResetRandomSteering()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools"></a>

```csharp
private void ResetRegionPools()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetSessionAffinityAttributes` <a name="ResetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes"></a>

```csharp
private void ResetSessionAffinityAttributes()
```

##### `ResetSessionAffinityTtl` <a name="ResetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl"></a>

```csharp
private void ResetSessionAffinityTtl()
```

##### `ResetSteeringPolicy` <a name="ResetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy"></a>

```csharp
private void ResetSteeringPolicy()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput">AdaptiveRoutingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput">DefaultPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput">FallbackPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput">LocationStrategyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput">PopPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput">RandomSteeringInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput">SessionAffinityAttributesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput">SessionAffinityTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput">SteeringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools">CountryPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools">PopPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools">RegionPools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting"></a>

```csharp
public LoadBalancerRulesOverridesAdaptiveRoutingOutputReference AdaptiveRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy"></a>

```csharp
public LoadBalancerRulesOverridesLocationStrategyOutputReference LocationStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a>

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering"></a>

```csharp
public LoadBalancerRulesOverridesRandomSteeringOutputReference RandomSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a>

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```csharp
public LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference SessionAffinityAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `AdaptiveRoutingInput`<sup>Optional</sup> <a name="AdaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesAdaptiveRouting AdaptiveRoutingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DefaultPoolsInput`<sup>Optional</sup> <a name="DefaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput"></a>

```csharp
public string[] DefaultPoolsInput { get; }
```

- *Type:* string[]

---

##### `FallbackPoolInput`<sup>Optional</sup> <a name="FallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput"></a>

```csharp
public string FallbackPoolInput { get; }
```

- *Type:* string

---

##### `LocationStrategyInput`<sup>Optional</sup> <a name="LocationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesLocationStrategy LocationStrategyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `RandomSteeringInput`<sup>Optional</sup> <a name="RandomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesRandomSteering RandomSteeringInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPoolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `SessionAffinityAttributesInput`<sup>Optional</sup> <a name="SessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesSessionAffinityAttributes SessionAffinityAttributesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput"></a>

```csharp
public string SessionAffinityInput { get; }
```

- *Type:* string

---

##### `SessionAffinityTtlInput`<sup>Optional</sup> <a name="SessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput"></a>

```csharp
public double SessionAffinityTtlInput { get; }
```

- *Type:* double

---

##### `SteeringPolicyInput`<sup>Optional</sup> <a name="SteeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput"></a>

```csharp
public string SteeringPolicyInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CountryPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; }
```

- *Type:* string[]

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; }
```

- *Type:* string

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> PopPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> RegionPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; }
```

- *Type:* double

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesOverrides InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---


### LoadBalancerRulesOverridesRandomSteeringOutputReference <a name="LoadBalancerRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesRandomSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight">ResetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights">ResetPoolWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultWeight` <a name="ResetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight"></a>

```csharp
private void ResetDefaultWeight()
```

##### `ResetPoolWeights` <a name="ResetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights"></a>

```csharp
private void ResetPoolWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput">DefaultWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput">PoolWeightsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultWeightInput`<sup>Optional</sup> <a name="DefaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput"></a>

```csharp
public double DefaultWeightInput { get; }
```

- *Type:* double

---

##### `PoolWeightsInput`<sup>Optional</sup> <a name="PoolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeightsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; }
```

- *Type:* double

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> PoolWeights { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesRandomSteering InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---


### LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference <a name="LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders">ResetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite">ResetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">ResetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```csharp
private void ResetDrainDuration()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetRequireAllHeaders` <a name="ResetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```csharp
private void ResetRequireAllHeaders()
```

##### `ResetSamesite` <a name="ResetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite"></a>

```csharp
private void ResetSamesite()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure"></a>

```csharp
private void ResetSecure()
```

##### `ResetZeroDowntimeFailover` <a name="ResetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```csharp
private void ResetZeroDowntimeFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput">HeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">RequireAllHeadersInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput">SamesiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput">SecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">ZeroDowntimeFailoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```csharp
public double DrainDurationInput { get; }
```

- *Type:* double

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput"></a>

```csharp
public string[] HeadersInput { get; }
```

- *Type:* string[]

---

##### `RequireAllHeadersInput`<sup>Optional</sup> <a name="RequireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```csharp
public bool|IResolvable RequireAllHeadersInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SamesiteInput`<sup>Optional</sup> <a name="SamesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```csharp
public string SamesiteInput { get; }
```

- *Type:* string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput"></a>

```csharp
public string SecureInput { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailoverInput`<sup>Optional</sup> <a name="ZeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```csharp
public string ZeroDowntimeFailoverInput { get; }
```

- *Type:* string

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```csharp
public double DrainDuration { get; }
```

- *Type:* double

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```csharp
public bool|IResolvable RequireAllHeaders { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```csharp
public string Samesite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```csharp
public string Secure { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerRulesOverridesSessionAffinityAttributes InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---


### LoadBalancerSessionAffinityAttributesOutputReference <a name="LoadBalancerSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerSessionAffinityAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders">ResetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite">ResetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">ResetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```csharp
private void ResetDrainDuration()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetRequireAllHeaders` <a name="ResetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```csharp
private void ResetRequireAllHeaders()
```

##### `ResetSamesite` <a name="ResetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite"></a>

```csharp
private void ResetSamesite()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure"></a>

```csharp
private void ResetSecure()
```

##### `ResetZeroDowntimeFailover` <a name="ResetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```csharp
private void ResetZeroDowntimeFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput">HeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">RequireAllHeadersInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput">SamesiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput">SecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">ZeroDowntimeFailoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```csharp
public double DrainDurationInput { get; }
```

- *Type:* double

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput"></a>

```csharp
public string[] HeadersInput { get; }
```

- *Type:* string[]

---

##### `RequireAllHeadersInput`<sup>Optional</sup> <a name="RequireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```csharp
public bool|IResolvable RequireAllHeadersInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SamesiteInput`<sup>Optional</sup> <a name="SamesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```csharp
public string SamesiteInput { get; }
```

- *Type:* string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput"></a>

```csharp
public string SecureInput { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailoverInput`<sup>Optional</sup> <a name="ZeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```csharp
public string ZeroDowntimeFailoverInput { get; }
```

- *Type:* string

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```csharp
public double DrainDuration { get; }
```

- *Type:* double

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```csharp
public bool|IResolvable RequireAllHeaders { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite"></a>

```csharp
public string Samesite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure"></a>

```csharp
public string Secure { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerSessionAffinityAttributes InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---



