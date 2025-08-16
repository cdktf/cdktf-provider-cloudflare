# `loadBalancer` Submodule <a name="`loadBalancer` Submodule" id="@cdktf/provider-cloudflare.loadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancer <a name="LoadBalancer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer cloudflare_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancer(scope: Construct, id: string, config: LoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig">LoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig">LoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting">putAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy">putLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering">putRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes">putSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting">resetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy">resetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering">resetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools">resetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes">resetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl">resetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy">resetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdaptiveRouting` <a name="putAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting"></a>

```typescript
public putAdaptiveRouting(value: LoadBalancerAdaptiveRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `putLocationStrategy` <a name="putLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy"></a>

```typescript
public putLocationStrategy(value: LoadBalancerLocationStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `putRandomSteering` <a name="putRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering"></a>

```typescript
public putRandomSteering(value: LoadBalancerRandomSteering): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules"></a>

```typescript
public putRules(value: IResolvable | LoadBalancerRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---

##### `putSessionAffinityAttributes` <a name="putSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes"></a>

```typescript
public putSessionAffinityAttributes(value: LoadBalancerSessionAffinityAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `resetAdaptiveRouting` <a name="resetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting"></a>

```typescript
public resetAdaptiveRouting(): void
```

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools"></a>

```typescript
public resetCountryPools(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLocationStrategy` <a name="resetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy"></a>

```typescript
public resetLocationStrategy(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools"></a>

```typescript
public resetPopPools(): void
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied"></a>

```typescript
public resetProxied(): void
```

##### `resetRandomSteering` <a name="resetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering"></a>

```typescript
public resetRandomSteering(): void
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools"></a>

```typescript
public resetRegionPools(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSessionAffinityAttributes` <a name="resetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes"></a>

```typescript
public resetSessionAffinityAttributes(): void
```

##### `resetSessionAffinityTtl` <a name="resetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl"></a>

```typescript
public resetSessionAffinityTtl(): void
```

##### `resetSteeringPolicy` <a name="resetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy"></a>

```typescript
public resetSteeringPolicy(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

loadBalancer.LoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

loadBalancer.LoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

loadBalancer.LoadBalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

loadBalancer.LoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput">adaptiveRoutingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput">countryPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput">defaultPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput">fallbackPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput">locationStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput">networksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput">popPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput">proxiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput">randomSteeringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput">regionPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput">sessionAffinityAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput">sessionAffinityTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput">steeringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools">countryPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools">popPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools">regionPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: LoadBalancerAdaptiveRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: LoadBalancerLocationStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering"></a>

```typescript
public readonly randomSteering: LoadBalancerRandomSteeringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules"></a>

```typescript
public readonly rules: LoadBalancerRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a>

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: LoadBalancerSessionAffinityAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a>

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `adaptiveRoutingInput`<sup>Optional</sup> <a name="adaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput"></a>

```typescript
public readonly adaptiveRoutingInput: IResolvable | LoadBalancerAdaptiveRouting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput"></a>

```typescript
public readonly countryPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `defaultPoolsInput`<sup>Optional</sup> <a name="defaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput"></a>

```typescript
public readonly defaultPoolsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackPoolInput`<sup>Optional</sup> <a name="fallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput"></a>

```typescript
public readonly fallbackPoolInput: string;
```

- *Type:* string

---

##### `locationStrategyInput`<sup>Optional</sup> <a name="locationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput"></a>

```typescript
public readonly locationStrategyInput: IResolvable | LoadBalancerLocationStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput"></a>

```typescript
public readonly networksInput: string[];
```

- *Type:* string[]

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput"></a>

```typescript
public readonly popPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput"></a>

```typescript
public readonly proxiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `randomSteeringInput`<sup>Optional</sup> <a name="randomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput"></a>

```typescript
public readonly randomSteeringInput: IResolvable | LoadBalancerRandomSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput"></a>

```typescript
public readonly regionPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | LoadBalancerRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---

##### `sessionAffinityAttributesInput`<sup>Optional</sup> <a name="sessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput"></a>

```typescript
public readonly sessionAffinityAttributesInput: IResolvable | LoadBalancerSessionAffinityAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `sessionAffinityTtlInput`<sup>Optional</sup> <a name="sessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput"></a>

```typescript
public readonly sessionAffinityTtlInput: number;
```

- *Type:* number

---

##### `steeringPolicyInput`<sup>Optional</sup> <a name="steeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput"></a>

```typescript
public readonly steeringPolicyInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerAdaptiveRouting <a name="LoadBalancerAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerAdaptiveRouting: loadBalancer.LoadBalancerAdaptiveRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failoverAcrossPools`<sup>Optional</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerConfig <a name="LoadBalancerConfig" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerConfig: loadBalancer.LoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name">name</a></code> | <code>string</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools">countryPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description">description</a></code> | <code>string</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks">networks</a></code> | <code>string[]</code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools">popPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools">regionPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl">ttl</a></code> | <code>number</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `adaptiveRouting`<sup>Optional</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: LoadBalancerAdaptiveRouting;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `locationStrategy`<sup>Optional</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: LoadBalancerLocationStrategy;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `randomSteering`<sup>Optional</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering"></a>

```typescript
public readonly randomSteering: LoadBalancerRandomSteering;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

`steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
- `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
- `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | LoadBalancerRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `sessionAffinityAttributes`<sup>Optional</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: LoadBalancerSessionAffinityAttributes;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `sessionAffinityTtl`<sup>Optional</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steeringPolicy`<sup>Optional</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

Steering Policy for this load balancer.

`"off"`: Use `default_pools`.
- `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
- `"random"`: Select a pool randomly.
- `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
- `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
- `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
- `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
- `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerLocationStrategy <a name="LoadBalancerLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerLocationStrategy: loadBalancer.LoadBalancerLocationStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode">mode</a></code> | <code>string</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs">preferEcs</a></code> | <code>string</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

`"pop"`: Use the Cloudflare PoP location.
- `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `preferEcs`<sup>Optional</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

`"always"`: Always prefer ECS.
- `"never"`: Never prefer ECS.
- `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
- `"geo"`: Prefer ECS only when `steering_policy="geo"`.
Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRandomSteering <a name="LoadBalancerRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRandomSteering: loadBalancer.LoadBalancerRandomSteering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights">poolWeights</a></code> | <code>{[ key: string ]: number}</code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `defaultWeight`<sup>Optional</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `poolWeights`<sup>Optional</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights"></a>

```typescript
public readonly poolWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRules <a name="LoadBalancerRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRules: loadBalancer.LoadBalancerRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition">condition</a></code> | <code>string</code> | The condition expressions to evaluate. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable this specific rule. It will no longer be evaluated by this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | A collection of fields used to directly respond to the eyeball instead of routing to a pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name">name</a></code> | <code>string</code> | Name of this rule. Only used for human readability. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | A collection of overrides to apply to the load balancer when this rule's condition is true. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority">priority</a></code> | <code>number</code> | The order in which rules should be executed in relation to each other. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates">terminates</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this rule's condition is true, this causes rule evaluation to stop after processing this rule. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition expressions to evaluate.

If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#condition LoadBalancer#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable this specific rule. It will no longer be evaluated by this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#disabled LoadBalancer#disabled}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LoadBalancerRulesFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

A collection of fields used to directly respond to the eyeball instead of routing to a pool.

If a fixed_response is supplied the rule will be marked as terminates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of this rule. Only used for human readability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides"></a>

```typescript
public readonly overrides: LoadBalancerRulesOverrides;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

A collection of overrides to apply to the load balancer when this rule's condition is true.

All fields are optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#overrides LoadBalancer#overrides}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The order in which rules should be executed in relation to each other.

Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#priority LoadBalancer#priority}

---

##### `terminates`<sup>Optional</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates"></a>

```typescript
public readonly terminates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this rule's condition is true, this causes rule evaluation to stop after processing this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#terminates LoadBalancer#terminates}

---

### LoadBalancerRulesFixedResponse <a name="LoadBalancerRulesFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesFixedResponse: loadBalancer.LoadBalancerRulesFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType">contentType</a></code> | <code>string</code> | The http 'Content-Type' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location">location</a></code> | <code>string</code> | The http 'Location' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody">messageBody</a></code> | <code>string</code> | Text to include as the http body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode">statusCode</a></code> | <code>number</code> | The http status code to respond with. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The http 'Content-Type' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#content_type LoadBalancer#content_type}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The http 'Location' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#location LoadBalancer#location}

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

Text to include as the http body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#message_body LoadBalancer#message_body}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

The http status code to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#status_code LoadBalancer#status_code}

---

### LoadBalancerRulesOverrides <a name="LoadBalancerRulesOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesOverrides: loadBalancer.LoadBalancerRulesOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools">countryPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools">popPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools">regionPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl">ttl</a></code> | <code>number</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `adaptiveRouting`<sup>Optional</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: LoadBalancerRulesOverridesAdaptiveRouting;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `defaultPools`<sup>Optional</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallbackPool`<sup>Optional</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `locationStrategy`<sup>Optional</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: LoadBalancerRulesOverridesLocationStrategy;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `randomSteering`<sup>Optional</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering"></a>

```typescript
public readonly randomSteering: LoadBalancerRulesOverridesRandomSteering;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

Configures pool weights.

`steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
- `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
- `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `sessionAffinityAttributes`<sup>Optional</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: LoadBalancerRulesOverridesSessionAffinityAttributes;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `sessionAffinityTtl`<sup>Optional</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steeringPolicy`<sup>Optional</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

Steering Policy for this load balancer.

`"off"`: Use `default_pools`.
- `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
- `"random"`: Select a pool randomly.
- `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
- `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
- `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
- `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
- `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerRulesOverridesAdaptiveRouting <a name="LoadBalancerRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesOverridesAdaptiveRouting: loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failoverAcrossPools`<sup>Optional</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerRulesOverridesLocationStrategy <a name="LoadBalancerRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesOverridesLocationStrategy: loadBalancer.LoadBalancerRulesOverridesLocationStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode">mode</a></code> | <code>string</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs">preferEcs</a></code> | <code>string</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

`"pop"`: Use the Cloudflare PoP location.
- `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `preferEcs`<sup>Optional</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

`"always"`: Always prefer ECS.
- `"never"`: Never prefer ECS.
- `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
- `"geo"`: Prefer ECS only when `steering_policy="geo"`.
Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRulesOverridesRandomSteering <a name="LoadBalancerRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesOverridesRandomSteering: loadBalancer.LoadBalancerRulesOverridesRandomSteering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights">poolWeights</a></code> | <code>{[ key: string ]: number}</code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `defaultWeight`<sup>Optional</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `poolWeights`<sup>Optional</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights"></a>

```typescript
public readonly poolWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRulesOverridesSessionAffinityAttributes <a name="LoadBalancerRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerRulesOverridesSessionAffinityAttributes: loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>number</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers">headers</a></code> | <code>string[]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders">requireAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>string</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure">secure</a></code> | <code>string</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `requireAllHeaders`<sup>Optional</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zeroDowntimeFailover`<sup>Optional</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

### LoadBalancerSessionAffinityAttributes <a name="LoadBalancerSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

const loadBalancerSessionAffinityAttributes: loadBalancer.LoadBalancerSessionAffinityAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>number</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers">headers</a></code> | <code>string[]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders">requireAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>string</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure">secure</a></code> | <code>string</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `requireAllHeaders`<sup>Optional</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zeroDowntimeFailover`<sup>Optional</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerAdaptiveRoutingOutputReference <a name="LoadBalancerAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerAdaptiveRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools">resetFailoverAcrossPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailoverAcrossPools` <a name="resetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```typescript
public resetFailoverAcrossPools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failoverAcrossPoolsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverAcrossPoolsInput`<sup>Optional</sup> <a name="failoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```typescript
public readonly failoverAcrossPoolsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerAdaptiveRouting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---


### LoadBalancerLocationStrategyOutputReference <a name="LoadBalancerLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerLocationStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs">resetPreferEcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPreferEcs` <a name="resetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs"></a>

```typescript
public resetPreferEcs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput">preferEcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `preferEcsInput`<sup>Optional</sup> <a name="preferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput"></a>

```typescript
public readonly preferEcsInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerLocationStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---


### LoadBalancerRandomSteeringOutputReference <a name="LoadBalancerRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRandomSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight">resetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights">resetPoolWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultWeight` <a name="resetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight"></a>

```typescript
public resetDefaultWeight(): void
```

##### `resetPoolWeights` <a name="resetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights"></a>

```typescript
public resetPoolWeights(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput">defaultWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput">poolWeightsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultWeightInput`<sup>Optional</sup> <a name="defaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput"></a>

```typescript
public readonly defaultWeightInput: number;
```

- *Type:* number

---

##### `poolWeightsInput`<sup>Optional</sup> <a name="poolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput"></a>

```typescript
public readonly poolWeightsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights"></a>

```typescript
public readonly poolWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRandomSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---


### LoadBalancerRulesFixedResponseOutputReference <a name="LoadBalancerRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesFixedResponse;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---


### LoadBalancerRulesList <a name="LoadBalancerRulesList" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get"></a>

```typescript
public get(index: number): LoadBalancerRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>[]

---


### LoadBalancerRulesOutputReference <a name="LoadBalancerRulesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates">resetTerminates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: LoadBalancerRulesFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: LoadBalancerRulesOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTerminates` <a name="resetTerminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates"></a>

```typescript
public resetTerminates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput">terminatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates">terminates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: LoadBalancerRulesFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides"></a>

```typescript
public readonly overrides: LoadBalancerRulesOverridesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: IResolvable | LoadBalancerRulesFixedResponse;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | LoadBalancerRulesOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `terminatesInput`<sup>Optional</sup> <a name="terminatesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput"></a>

```typescript
public readonly terminatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `terminates`<sup>Required</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates"></a>

```typescript
public readonly terminates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>

---


### LoadBalancerRulesOverridesAdaptiveRoutingOutputReference <a name="LoadBalancerRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools">resetFailoverAcrossPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailoverAcrossPools` <a name="resetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```typescript
public resetFailoverAcrossPools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failoverAcrossPoolsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverAcrossPoolsInput`<sup>Optional</sup> <a name="failoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```typescript
public readonly failoverAcrossPoolsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```typescript
public readonly failoverAcrossPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesOverridesAdaptiveRouting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---


### LoadBalancerRulesOverridesLocationStrategyOutputReference <a name="LoadBalancerRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs">resetPreferEcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPreferEcs` <a name="resetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs"></a>

```typescript
public resetPreferEcs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput">preferEcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `preferEcsInput`<sup>Optional</sup> <a name="preferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput"></a>

```typescript
public readonly preferEcsInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```typescript
public readonly preferEcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesOverridesLocationStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---


### LoadBalancerRulesOverridesOutputReference <a name="LoadBalancerRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting">putAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy">putLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering">putRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes">putSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting">resetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools">resetDefaultPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool">resetFallbackPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy">resetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering">resetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools">resetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes">resetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl">resetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy">resetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdaptiveRouting` <a name="putAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting"></a>

```typescript
public putAdaptiveRouting(value: LoadBalancerRulesOverridesAdaptiveRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `putLocationStrategy` <a name="putLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy"></a>

```typescript
public putLocationStrategy(value: LoadBalancerRulesOverridesLocationStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `putRandomSteering` <a name="putRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering"></a>

```typescript
public putRandomSteering(value: LoadBalancerRulesOverridesRandomSteering): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `putSessionAffinityAttributes` <a name="putSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes"></a>

```typescript
public putSessionAffinityAttributes(value: LoadBalancerRulesOverridesSessionAffinityAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `resetAdaptiveRouting` <a name="resetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting"></a>

```typescript
public resetAdaptiveRouting(): void
```

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools"></a>

```typescript
public resetCountryPools(): void
```

##### `resetDefaultPools` <a name="resetDefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools"></a>

```typescript
public resetDefaultPools(): void
```

##### `resetFallbackPool` <a name="resetFallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool"></a>

```typescript
public resetFallbackPool(): void
```

##### `resetLocationStrategy` <a name="resetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy"></a>

```typescript
public resetLocationStrategy(): void
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools"></a>

```typescript
public resetPopPools(): void
```

##### `resetRandomSteering` <a name="resetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering"></a>

```typescript
public resetRandomSteering(): void
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools"></a>

```typescript
public resetRegionPools(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSessionAffinityAttributes` <a name="resetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes"></a>

```typescript
public resetSessionAffinityAttributes(): void
```

##### `resetSessionAffinityTtl` <a name="resetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl"></a>

```typescript
public resetSessionAffinityTtl(): void
```

##### `resetSteeringPolicy` <a name="resetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy"></a>

```typescript
public resetSteeringPolicy(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput">adaptiveRoutingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput">countryPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput">defaultPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput">fallbackPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput">locationStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput">popPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput">randomSteeringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput">regionPoolsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput">sessionAffinityAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput">sessionAffinityTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput">steeringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools">countryPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools">defaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool">fallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools">popPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools">regionPools</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy">steeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting"></a>

```typescript
public readonly adaptiveRouting: LoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy"></a>

```typescript
public readonly locationStrategy: LoadBalancerRulesOverridesLocationStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a>

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering"></a>

```typescript
public readonly randomSteering: LoadBalancerRulesOverridesRandomSteeringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a>

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```typescript
public readonly sessionAffinityAttributes: LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `adaptiveRoutingInput`<sup>Optional</sup> <a name="adaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput"></a>

```typescript
public readonly adaptiveRoutingInput: IResolvable | LoadBalancerRulesOverridesAdaptiveRouting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput"></a>

```typescript
public readonly countryPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `defaultPoolsInput`<sup>Optional</sup> <a name="defaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput"></a>

```typescript
public readonly defaultPoolsInput: string[];
```

- *Type:* string[]

---

##### `fallbackPoolInput`<sup>Optional</sup> <a name="fallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput"></a>

```typescript
public readonly fallbackPoolInput: string;
```

- *Type:* string

---

##### `locationStrategyInput`<sup>Optional</sup> <a name="locationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput"></a>

```typescript
public readonly locationStrategyInput: IResolvable | LoadBalancerRulesOverridesLocationStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput"></a>

```typescript
public readonly popPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `randomSteeringInput`<sup>Optional</sup> <a name="randomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput"></a>

```typescript
public readonly randomSteeringInput: IResolvable | LoadBalancerRulesOverridesRandomSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput"></a>

```typescript
public readonly regionPoolsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `sessionAffinityAttributesInput`<sup>Optional</sup> <a name="sessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput"></a>

```typescript
public readonly sessionAffinityAttributesInput: IResolvable | LoadBalancerRulesOverridesSessionAffinityAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `sessionAffinityTtlInput`<sup>Optional</sup> <a name="sessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput"></a>

```typescript
public readonly sessionAffinityTtlInput: number;
```

- *Type:* number

---

##### `steeringPolicyInput`<sup>Optional</sup> <a name="steeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput"></a>

```typescript
public readonly steeringPolicyInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools"></a>

```typescript
public readonly countryPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools"></a>

```typescript
public readonly defaultPools: string[];
```

- *Type:* string[]

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool"></a>

```typescript
public readonly fallbackPool: string;
```

- *Type:* string

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools"></a>

```typescript
public readonly popPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools"></a>

```typescript
public readonly regionPools: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```typescript
public readonly sessionAffinityTtl: number;
```

- *Type:* number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy"></a>

```typescript
public readonly steeringPolicy: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---


### LoadBalancerRulesOverridesRandomSteeringOutputReference <a name="LoadBalancerRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight">resetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights">resetPoolWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultWeight` <a name="resetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight"></a>

```typescript
public resetDefaultWeight(): void
```

##### `resetPoolWeights` <a name="resetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights"></a>

```typescript
public resetPoolWeights(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput">defaultWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput">poolWeightsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultWeightInput`<sup>Optional</sup> <a name="defaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput"></a>

```typescript
public readonly defaultWeightInput: number;
```

- *Type:* number

---

##### `poolWeightsInput`<sup>Optional</sup> <a name="poolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput"></a>

```typescript
public readonly poolWeightsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```typescript
public readonly defaultWeight: number;
```

- *Type:* number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```typescript
public readonly poolWeights: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesOverridesRandomSteering;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---


### LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference <a name="LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders">resetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite">resetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">resetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```typescript
public resetDrainDuration(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetRequireAllHeaders` <a name="resetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```typescript
public resetRequireAllHeaders(): void
```

##### `resetSamesite` <a name="resetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite"></a>

```typescript
public resetSamesite(): void
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure"></a>

```typescript
public resetSecure(): void
```

##### `resetZeroDowntimeFailover` <a name="resetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```typescript
public resetZeroDowntimeFailover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">requireAllHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput">samesiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput">secureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zeroDowntimeFailoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```typescript
public readonly drainDurationInput: number;
```

- *Type:* number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `requireAllHeadersInput`<sup>Optional</sup> <a name="requireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```typescript
public readonly requireAllHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samesiteInput`<sup>Optional</sup> <a name="samesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```typescript
public readonly samesiteInput: string;
```

- *Type:* string

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput"></a>

```typescript
public readonly secureInput: string;
```

- *Type:* string

---

##### `zeroDowntimeFailoverInput`<sup>Optional</sup> <a name="zeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```typescript
public readonly zeroDowntimeFailoverInput: string;
```

- *Type:* string

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerRulesOverridesSessionAffinityAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---


### LoadBalancerSessionAffinityAttributesOutputReference <a name="LoadBalancerSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer"></a>

```typescript
import { loadBalancer } from '@cdktf/provider-cloudflare'

new loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders">resetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite">resetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">resetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```typescript
public resetDrainDuration(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetRequireAllHeaders` <a name="resetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```typescript
public resetRequireAllHeaders(): void
```

##### `resetSamesite` <a name="resetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite"></a>

```typescript
public resetSamesite(): void
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure"></a>

```typescript
public resetSecure(): void
```

##### `resetZeroDowntimeFailover` <a name="resetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```typescript
public resetZeroDowntimeFailover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">requireAllHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput">samesiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput">secureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zeroDowntimeFailoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```typescript
public readonly drainDurationInput: number;
```

- *Type:* number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `requireAllHeadersInput`<sup>Optional</sup> <a name="requireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```typescript
public readonly requireAllHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samesiteInput`<sup>Optional</sup> <a name="samesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```typescript
public readonly samesiteInput: string;
```

- *Type:* string

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput"></a>

```typescript
public readonly secureInput: string;
```

- *Type:* string

---

##### `zeroDowntimeFailoverInput`<sup>Optional</sup> <a name="zeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```typescript
public readonly zeroDowntimeFailoverInput: string;
```

- *Type:* string

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```typescript
public readonly drainDuration: number;
```

- *Type:* number

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```typescript
public readonly requireAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite"></a>

```typescript
public readonly samesite: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure"></a>

```typescript
public readonly secure: string;
```

- *Type:* string

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```typescript
public readonly zeroDowntimeFailover: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerSessionAffinityAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---



