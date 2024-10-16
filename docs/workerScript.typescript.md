# `workerScript` Submodule <a name="`workerScript` Submodule" id="@cdktf/provider-cloudflare.workerScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerScript <a name="WorkerScript" id="@cdktf/provider-cloudflare.workerScript.WorkerScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script cloudflare_worker_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScript(scope: Construct, id: string, config: WorkerScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig">WorkerScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig">WorkerScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding">putAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding">putD1DatabaseBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putHyperdriveConfigBinding">putHyperdriveConfigBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding">putKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding">putPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding">putQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding">putR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding">putSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding">putWebassemblyBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding">resetAnalyticsEngineBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetD1DatabaseBinding">resetD1DatabaseBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetDispatchNamespace">resetDispatchNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetHyperdriveConfigBinding">resetHyperdriveConfigBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding">resetKvNamespaceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush">resetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule">resetModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding">resetPlainTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding">resetQueueBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding">resetR2BucketBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding">resetSecretTextBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding">resetWebassemblyBinding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsEngineBinding` <a name="putAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding"></a>

```typescript
public putAnalyticsEngineBinding(value: IResolvable | WorkerScriptAnalyticsEngineBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]

---

##### `putD1DatabaseBinding` <a name="putD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding"></a>

```typescript
public putD1DatabaseBinding(value: IResolvable | WorkerScriptD1DatabaseBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putD1DatabaseBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]

---

##### `putHyperdriveConfigBinding` <a name="putHyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putHyperdriveConfigBinding"></a>

```typescript
public putHyperdriveConfigBinding(value: IResolvable | WorkerScriptHyperdriveConfigBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putHyperdriveConfigBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]

---

##### `putKvNamespaceBinding` <a name="putKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding"></a>

```typescript
public putKvNamespaceBinding(value: IResolvable | WorkerScriptKvNamespaceBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement"></a>

```typescript
public putPlacement(value: IResolvable | WorkerScriptPlacement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlacement.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]

---

##### `putPlainTextBinding` <a name="putPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding"></a>

```typescript
public putPlainTextBinding(value: IResolvable | WorkerScriptPlainTextBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]

---

##### `putQueueBinding` <a name="putQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding"></a>

```typescript
public putQueueBinding(value: IResolvable | WorkerScriptQueueBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]

---

##### `putR2BucketBinding` <a name="putR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding"></a>

```typescript
public putR2BucketBinding(value: IResolvable | WorkerScriptR2BucketBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]

---

##### `putSecretTextBinding` <a name="putSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding"></a>

```typescript
public putSecretTextBinding(value: IResolvable | WorkerScriptSecretTextBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding"></a>

```typescript
public putServiceBinding(value: IResolvable | WorkerScriptServiceBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]

---

##### `putWebassemblyBinding` <a name="putWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding"></a>

```typescript
public putWebassemblyBinding(value: IResolvable | WorkerScriptWebassemblyBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]

---

##### `resetAnalyticsEngineBinding` <a name="resetAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding"></a>

```typescript
public resetAnalyticsEngineBinding(): void
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate"></a>

```typescript
public resetCompatibilityDate(): void
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags"></a>

```typescript
public resetCompatibilityFlags(): void
```

##### `resetD1DatabaseBinding` <a name="resetD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetD1DatabaseBinding"></a>

```typescript
public resetD1DatabaseBinding(): void
```

##### `resetDispatchNamespace` <a name="resetDispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetDispatchNamespace"></a>

```typescript
public resetDispatchNamespace(): void
```

##### `resetHyperdriveConfigBinding` <a name="resetHyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetHyperdriveConfigBinding"></a>

```typescript
public resetHyperdriveConfigBinding(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKvNamespaceBinding` <a name="resetKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding"></a>

```typescript
public resetKvNamespaceBinding(): void
```

##### `resetLogpush` <a name="resetLogpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush"></a>

```typescript
public resetLogpush(): void
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule"></a>

```typescript
public resetModule(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetPlainTextBinding` <a name="resetPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding"></a>

```typescript
public resetPlainTextBinding(): void
```

##### `resetQueueBinding` <a name="resetQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding"></a>

```typescript
public resetQueueBinding(): void
```

##### `resetR2BucketBinding` <a name="resetR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding"></a>

```typescript
public resetR2BucketBinding(): void
```

##### `resetSecretTextBinding` <a name="resetSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding"></a>

```typescript
public resetSecretTextBinding(): void
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding"></a>

```typescript
public resetServiceBinding(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebassemblyBinding` <a name="resetWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding"></a>

```typescript
public resetWebassemblyBinding(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

workerScript.WorkerScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

workerScript.WorkerScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

workerScript.WorkerScript.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

workerScript.WorkerScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkerScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkerScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkerScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkerScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding">analyticsEngineBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBinding">d1DatabaseBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList">WorkerScriptD1DatabaseBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.hyperdriveConfigBinding">hyperdriveConfigBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList">WorkerScriptHyperdriveConfigBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding">kvNamespaceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList">WorkerScriptPlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding">plainTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding">queueBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding">r2BucketBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding">secretTextBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding">webassemblyBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput">analyticsEngineBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBindingInput">d1DatabaseBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespaceInput">dispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.hyperdriveConfigBindingInput">hyperdriveConfigBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput">kvNamespaceBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput">logpushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput">moduleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placementInput">placementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput">plainTextBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput">queueBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput">r2BucketBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput">secretTextBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput">serviceBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput">webassemblyBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespace">dispatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush">logpush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module">module</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analyticsEngineBinding`<sup>Required</sup> <a name="analyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding"></a>

```typescript
public readonly analyticsEngineBinding: WorkerScriptAnalyticsEngineBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a>

---

##### `d1DatabaseBinding`<sup>Required</sup> <a name="d1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBinding"></a>

```typescript
public readonly d1DatabaseBinding: WorkerScriptD1DatabaseBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList">WorkerScriptD1DatabaseBindingList</a>

---

##### `hyperdriveConfigBinding`<sup>Required</sup> <a name="hyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.hyperdriveConfigBinding"></a>

```typescript
public readonly hyperdriveConfigBinding: WorkerScriptHyperdriveConfigBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList">WorkerScriptHyperdriveConfigBindingList</a>

---

##### `kvNamespaceBinding`<sup>Required</sup> <a name="kvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding"></a>

```typescript
public readonly kvNamespaceBinding: WorkerScriptKvNamespaceBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placement"></a>

```typescript
public readonly placement: WorkerScriptPlacementList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList">WorkerScriptPlacementList</a>

---

##### `plainTextBinding`<sup>Required</sup> <a name="plainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding"></a>

```typescript
public readonly plainTextBinding: WorkerScriptPlainTextBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a>

---

##### `queueBinding`<sup>Required</sup> <a name="queueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding"></a>

```typescript
public readonly queueBinding: WorkerScriptQueueBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a>

---

##### `r2BucketBinding`<sup>Required</sup> <a name="r2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding"></a>

```typescript
public readonly r2BucketBinding: WorkerScriptR2BucketBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a>

---

##### `secretTextBinding`<sup>Required</sup> <a name="secretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding"></a>

```typescript
public readonly secretTextBinding: WorkerScriptSecretTextBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: WorkerScriptServiceBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a>

---

##### `webassemblyBinding`<sup>Required</sup> <a name="webassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding"></a>

```typescript
public readonly webassemblyBinding: WorkerScriptWebassemblyBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `analyticsEngineBindingInput`<sup>Optional</sup> <a name="analyticsEngineBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput"></a>

```typescript
public readonly analyticsEngineBindingInput: IResolvable | WorkerScriptAnalyticsEngineBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput"></a>

```typescript
public readonly compatibilityDateInput: string;
```

- *Type:* string

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput"></a>

```typescript
public readonly compatibilityFlagsInput: string[];
```

- *Type:* string[]

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `d1DatabaseBindingInput`<sup>Optional</sup> <a name="d1DatabaseBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.d1DatabaseBindingInput"></a>

```typescript
public readonly d1DatabaseBindingInput: IResolvable | WorkerScriptD1DatabaseBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]

---

##### `dispatchNamespaceInput`<sup>Optional</sup> <a name="dispatchNamespaceInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespaceInput"></a>

```typescript
public readonly dispatchNamespaceInput: string;
```

- *Type:* string

---

##### `hyperdriveConfigBindingInput`<sup>Optional</sup> <a name="hyperdriveConfigBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.hyperdriveConfigBindingInput"></a>

```typescript
public readonly hyperdriveConfigBindingInput: IResolvable | WorkerScriptHyperdriveConfigBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kvNamespaceBindingInput`<sup>Optional</sup> <a name="kvNamespaceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput"></a>

```typescript
public readonly kvNamespaceBindingInput: IResolvable | WorkerScriptKvNamespaceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]

---

##### `logpushInput`<sup>Optional</sup> <a name="logpushInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput"></a>

```typescript
public readonly logpushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput"></a>

```typescript
public readonly moduleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.placementInput"></a>

```typescript
public readonly placementInput: IResolvable | WorkerScriptPlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]

---

##### `plainTextBindingInput`<sup>Optional</sup> <a name="plainTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput"></a>

```typescript
public readonly plainTextBindingInput: IResolvable | WorkerScriptPlainTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]

---

##### `queueBindingInput`<sup>Optional</sup> <a name="queueBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput"></a>

```typescript
public readonly queueBindingInput: IResolvable | WorkerScriptQueueBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]

---

##### `r2BucketBindingInput`<sup>Optional</sup> <a name="r2BucketBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput"></a>

```typescript
public readonly r2BucketBindingInput: IResolvable | WorkerScriptR2BucketBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]

---

##### `secretTextBindingInput`<sup>Optional</sup> <a name="secretTextBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput"></a>

```typescript
public readonly secretTextBindingInput: IResolvable | WorkerScriptSecretTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput"></a>

```typescript
public readonly serviceBindingInput: IResolvable | WorkerScriptServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `webassemblyBindingInput`<sup>Optional</sup> <a name="webassemblyBindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput"></a>

```typescript
public readonly webassemblyBindingInput: IResolvable | WorkerScriptWebassemblyBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `dispatchNamespace`<sup>Required</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dispatchNamespace"></a>

```typescript
public readonly dispatchNamespace: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush"></a>

```typescript
public readonly logpush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module"></a>

```typescript
public readonly module: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerScriptAnalyticsEngineBinding <a name="WorkerScriptAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptAnalyticsEngineBinding: workerScript.WorkerScriptAnalyticsEngineBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset">dataset</a></code> | <code>string</code> | The name of the Analytics Engine dataset to write to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The name of the Analytics Engine dataset to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#dataset WorkerScript#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptConfig <a name="WorkerScriptConfig" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptConfig: workerScript.WorkerScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content">content</a></code> | <code>string</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name">name</a></code> | <code>string</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding">analyticsEngineBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.d1DatabaseBinding">d1DatabaseBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]</code> | d1_database_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dispatchNamespace">dispatchNamespace</a></code> | <code>string</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.hyperdriveConfigBinding">hyperdriveConfigBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]</code> | hyperdrive_config_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding">kvNamespaceBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush">logpush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module">module</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.placement">placement</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]</code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding">plainTextBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding">queueBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding">r2BucketBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding">secretTextBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding">serviceBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#tags WorkerScript#tags}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding">webassemblyBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]</code> | webassembly_binding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#account_id WorkerScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#content WorkerScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `analyticsEngineBinding`<sup>Optional</sup> <a name="analyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding"></a>

```typescript
public readonly analyticsEngineBinding: IResolvable | WorkerScriptAnalyticsEngineBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}

---

##### `d1DatabaseBinding`<sup>Optional</sup> <a name="d1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.d1DatabaseBinding"></a>

```typescript
public readonly d1DatabaseBinding: IResolvable | WorkerScriptD1DatabaseBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]

d1_database_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#d1_database_binding WorkerScript#d1_database_binding}

---

##### `dispatchNamespace`<sup>Optional</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dispatchNamespace"></a>

```typescript
public readonly dispatchNamespace: string;
```

- *Type:* string

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#dispatch_namespace WorkerScript#dispatch_namespace}

---

##### `hyperdriveConfigBinding`<sup>Optional</sup> <a name="hyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.hyperdriveConfigBinding"></a>

```typescript
public readonly hyperdriveConfigBinding: IResolvable | WorkerScriptHyperdriveConfigBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]

hyperdrive_config_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#hyperdrive_config_binding WorkerScript#hyperdrive_config_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kvNamespaceBinding`<sup>Optional</sup> <a name="kvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding"></a>

```typescript
public readonly kvNamespaceBinding: IResolvable | WorkerScriptKvNamespaceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush"></a>

```typescript
public readonly logpush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#logpush WorkerScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module"></a>

```typescript
public readonly module: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.placement"></a>

```typescript
public readonly placement: IResolvable | WorkerScriptPlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#placement WorkerScript#placement}

---

##### `plainTextBinding`<sup>Optional</sup> <a name="plainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding"></a>

```typescript
public readonly plainTextBinding: IResolvable | WorkerScriptPlainTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `queueBinding`<sup>Optional</sup> <a name="queueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding"></a>

```typescript
public readonly queueBinding: IResolvable | WorkerScriptQueueBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `r2BucketBinding`<sup>Optional</sup> <a name="r2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding"></a>

```typescript
public readonly r2BucketBinding: IResolvable | WorkerScriptR2BucketBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `secretTextBinding`<sup>Optional</sup> <a name="secretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding"></a>

```typescript
public readonly secretTextBinding: IResolvable | WorkerScriptSecretTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: IResolvable | WorkerScriptServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#tags WorkerScript#tags}.

---

##### `webassemblyBinding`<sup>Optional</sup> <a name="webassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding"></a>

```typescript
public readonly webassemblyBinding: IResolvable | WorkerScriptWebassemblyBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

### WorkerScriptD1DatabaseBinding <a name="WorkerScriptD1DatabaseBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptD1DatabaseBinding: workerScript.WorkerScriptD1DatabaseBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.databaseId">databaseId</a></code> | <code>string</code> | Database ID of D1 database to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Database ID of D1 database to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#database_id WorkerScript#database_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptHyperdriveConfigBinding <a name="WorkerScriptHyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptHyperdriveConfigBinding: workerScript.WorkerScriptHyperdriveConfigBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding.property.binding">binding</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding.property.id">id</a></code> | <code>string</code> | The ID of the Hyperdrive config to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding.property.binding"></a>

```typescript
public readonly binding: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#binding WorkerScript#binding}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the Hyperdrive config to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#id WorkerScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkerScriptKvNamespaceBinding <a name="WorkerScriptKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptKvNamespaceBinding: workerScript.WorkerScriptKvNamespaceBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId">namespaceId</a></code> | <code>string</code> | ID of the KV namespace you want to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

ID of the KV namespace you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#namespace_id WorkerScript#namespace_id}

---

### WorkerScriptPlacement <a name="WorkerScriptPlacement" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptPlacement: workerScript.WorkerScriptPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.property.mode">mode</a></code> | <code>string</code> | The placement mode for the Worker. Available values: `smart`. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The placement mode for the Worker. Available values: `smart`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#mode WorkerScript#mode}

---

### WorkerScriptPlainTextBinding <a name="WorkerScriptPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptPlainTextBinding: workerScript.WorkerScriptPlainTextBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text">text</a></code> | <code>string</code> | The plain text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The plain text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptQueueBinding <a name="WorkerScriptQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptQueueBinding: workerScript.WorkerScriptQueueBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding">binding</a></code> | <code>string</code> | The name of the global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue">queue</a></code> | <code>string</code> | Name of the queue you want to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding"></a>

```typescript
public readonly binding: string;
```

- *Type:* string

The name of the global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#binding WorkerScript#binding}

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Name of the queue you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#queue WorkerScript#queue}

---

### WorkerScriptR2BucketBinding <a name="WorkerScriptR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptR2BucketBinding: workerScript.WorkerScriptR2BucketBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the Bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the Bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#bucket_name WorkerScript#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptSecretTextBinding <a name="WorkerScriptSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptSecretTextBinding: workerScript.WorkerScriptSecretTextBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text">text</a></code> | <code>string</code> | The secret text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The secret text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptServiceBinding <a name="WorkerScriptServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptServiceBinding: workerScript.WorkerScriptServiceBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service">service</a></code> | <code>string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment">environment</a></code> | <code>string</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#service WorkerScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#environment WorkerScript#environment}

---

### WorkerScriptWebassemblyBinding <a name="WorkerScriptWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

const workerScriptWebassemblyBinding: workerScript.WorkerScriptWebassemblyBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module">module</a></code> | <code>string</code> | The base64 encoded wasm module you want to store. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string

The base64 encoded wasm module you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/worker_script#name WorkerScript#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerScriptAnalyticsEngineBindingList <a name="WorkerScriptAnalyticsEngineBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptAnalyticsEngineBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptAnalyticsEngineBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptAnalyticsEngineBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>[]

---


### WorkerScriptAnalyticsEngineBindingOutputReference <a name="WorkerScriptAnalyticsEngineBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptAnalyticsEngineBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptAnalyticsEngineBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>

---


### WorkerScriptD1DatabaseBindingList <a name="WorkerScriptD1DatabaseBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptD1DatabaseBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptD1DatabaseBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptD1DatabaseBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>[]

---


### WorkerScriptD1DatabaseBindingOutputReference <a name="WorkerScriptD1DatabaseBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptD1DatabaseBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptD1DatabaseBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptD1DatabaseBinding">WorkerScriptD1DatabaseBinding</a>

---


### WorkerScriptHyperdriveConfigBindingList <a name="WorkerScriptHyperdriveConfigBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptHyperdriveConfigBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptHyperdriveConfigBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptHyperdriveConfigBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>[]

---


### WorkerScriptHyperdriveConfigBindingOutputReference <a name="WorkerScriptHyperdriveConfigBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptHyperdriveConfigBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.bindingInput">bindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.binding">binding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.bindingInput"></a>

```typescript
public readonly bindingInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.binding"></a>

```typescript
public readonly binding: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptHyperdriveConfigBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptHyperdriveConfigBinding">WorkerScriptHyperdriveConfigBinding</a>

---


### WorkerScriptKvNamespaceBindingList <a name="WorkerScriptKvNamespaceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptKvNamespaceBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptKvNamespaceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptKvNamespaceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>[]

---


### WorkerScriptKvNamespaceBindingOutputReference <a name="WorkerScriptKvNamespaceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptKvNamespaceBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptKvNamespaceBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>

---


### WorkerScriptPlacementList <a name="WorkerScriptPlacementList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptPlacementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get"></a>

```typescript
public get(index: number): WorkerScriptPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptPlacement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>[]

---


### WorkerScriptPlacementOutputReference <a name="WorkerScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptPlacement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlacement">WorkerScriptPlacement</a>

---


### WorkerScriptPlainTextBindingList <a name="WorkerScriptPlainTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptPlainTextBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptPlainTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptPlainTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>[]

---


### WorkerScriptPlainTextBindingOutputReference <a name="WorkerScriptPlainTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptPlainTextBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptPlainTextBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>

---


### WorkerScriptQueueBindingList <a name="WorkerScriptQueueBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptQueueBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptQueueBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptQueueBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>[]

---


### WorkerScriptQueueBindingOutputReference <a name="WorkerScriptQueueBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptQueueBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput">bindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput">queueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding">binding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue">queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput"></a>

```typescript
public readonly bindingInput: string;
```

- *Type:* string

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput"></a>

```typescript
public readonly queueInput: string;
```

- *Type:* string

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding"></a>

```typescript
public readonly binding: string;
```

- *Type:* string

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptQueueBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>

---


### WorkerScriptR2BucketBindingList <a name="WorkerScriptR2BucketBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptR2BucketBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptR2BucketBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptR2BucketBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>[]

---


### WorkerScriptR2BucketBindingOutputReference <a name="WorkerScriptR2BucketBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptR2BucketBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptR2BucketBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>

---


### WorkerScriptSecretTextBindingList <a name="WorkerScriptSecretTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptSecretTextBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptSecretTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptSecretTextBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>[]

---


### WorkerScriptSecretTextBindingOutputReference <a name="WorkerScriptSecretTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptSecretTextBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptSecretTextBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>

---


### WorkerScriptServiceBindingList <a name="WorkerScriptServiceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptServiceBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>[]

---


### WorkerScriptServiceBindingOutputReference <a name="WorkerScriptServiceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptServiceBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptServiceBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>

---


### WorkerScriptWebassemblyBindingList <a name="WorkerScriptWebassemblyBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptWebassemblyBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get"></a>

```typescript
public get(index: number): WorkerScriptWebassemblyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptWebassemblyBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>[]

---


### WorkerScriptWebassemblyBindingOutputReference <a name="WorkerScriptWebassemblyBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer"></a>

```typescript
import { workerScript } from '@cdktf/provider-cloudflare'

new workerScript.WorkerScriptWebassemblyBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput">moduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module">module</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput"></a>

```typescript
public readonly moduleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerScriptWebassemblyBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>

---



